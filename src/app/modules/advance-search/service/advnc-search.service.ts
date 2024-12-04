import { BehaviorSubject, Subject } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdvncSearchService {
  recipeData$ = new BehaviorSubject<any>({ results: [] });
  loader = false
  private headers = new HttpHeaders({
    'X-Rapidapi-Key': 'cd2d3af89dmshf0c679291c77752p1845fbjsn079977aa0cdd',
    'X-Rapidapi-Host': 'tasty.p.rapidapi.com',
  });
  constructor(private _http: HttpClient) {}
  getTypeList() {
    return this._http.get('assets/json/taglist.json');
  }
  // setRecipeData(from: number, size: number, tags: string, query: string){
  //   console.log("from", from , "to" , size);
  //   const currentData = this.recipeData$.getValue();
  //   if(from < currentData.count)
  //   this._http.get("assets/json/sampleRecipeList.json").subscribe({
  //     next : (res:any) =>{
  //               const response = res;
  //               response.query = query;

  //               // Process the new results
  //               response.results.forEach((element: any) => {
  //                 element.is_quick_view_opened = false;
  //                 element.response_type = element.canonical_id.split(':')[0];
  //                 element.expand_open_allowed = element.response_type === 'recipe';
  //               });

  //               // Append the new results to the existing state
  //               const updatedResults = currentData?.results
  //                 ? [...currentData.results, ...response.results]
  //                 : response.results;

  //               const updatedResponse = {
  //                 ...response,
  //                 results: updatedResults,
  //               };

  //               // Update the BehaviorSubject with the new state
  //               this.recipeData$.next(updatedResponse);

  //               this.loader = false;
  //             },
  //     error : (err: HttpErrorResponse)=>{

  //     }
  //   })
  // }

  // https://tasty.co/api/proxy/tasty/search-feed?size=20&from=0&search_terms=burger

  // setRecipeData(from: number, size: number, tags: string, query: string) {
  //   if(!this.loader){
  //     const params = new HttpParams()
  //     .set('from', String(from))
  //     .set('size', String(size))
  //     .set('tags', tags)
  //     .set('q', query);
  //   console.log(params);
  //   this.loader = true
  //   this._http
  //     .get('https://tasty.p.rapidapi.com/recipes/list', {
  //       headers: this.headers,
  //       params: params,
  //     })
  //     .subscribe({
  //       next: (res: any) => {
  //         const response = res;
  //         response.query = query;
  //         response.results.forEach((element: any) => {
  //           element.is_quick_view_opened = false;
  //           element.response_type = element.canonical_id.split(':')[0];
  //           if (element.response_type == 'recipe') {
  //             element.expand_open_allowed = true;
  //           } else {
  //             element.expand_open_allowed = false;
  //           }
  //         });
  //         this.recipeData$.next(response);
  //         this.loader = false
  //       },
  //     });
  //   }

  // }
  setRecipeData(from: number, size: number, tags: string, query: string , newSearch = false) {
    const currentData = this.recipeData$.getValue();
    if (!this.loader) {

      const params = new HttpParams()
        .set('from', String(from))
        .set('size', String(size))
        .set('tags', tags)
        .set('q', query);

      console.log(params);
      this.loader = true;

      this._http.get('https://tasty.p.rapidapi.com/recipes/list', {
        headers: this.headers,
        params: params,
      }).subscribe({
        next: (res: any) => {
          const response = res;
          response.query = query;

          // Process the new results
          response.results.forEach((element: any) => {
            element.is_quick_view_opened = false;
            element.response_type = element.canonical_id.split(':')[0];
            element.expand_open_allowed = element.response_type === 'recipe';
          });

          // Append the new results to the existing state

          const updatedResults = currentData?.results
            ? [...currentData.results, ...response.results]
            : response.results;

          const updatedResponse = {
            ...response,
            results: updatedResults,
          };

          // Update the BehaviorSubject with the new state
          if(newSearch){
            this.recipeData$.next(response);
          }
          this.recipeData$.next(updatedResponse);

          this.loader = false;
        },
        error: () => {
          this.loader = false; // Handle error cases
        }
      });
    }
  }
  getRecipeData() {
    return this.recipeData$;
  }
}
