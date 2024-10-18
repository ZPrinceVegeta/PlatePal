import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdvncSearchService {
  recipeData$ = new Subject<any>();
  private headers = new HttpHeaders({
    'X-Rapidapi-Key': 'cd2d3af89dmshf0c679291c77752p1845fbjsn079977aa0cdd',
    'X-Rapidapi-Host': 'tasty.p.rapidapi.com',
  });
  constructor(private _http: HttpClient) {}
  getTypeList() {
    return this._http.get('assets/json/taglist.json');
  }
  // setRecipeData(from: number, size: number, tags: string, query: string){
  //   this._http.get("assets/json/sampleRecipeList.json").subscribe({
  //     next : (res:any) =>{
  //       const response=res
  //       response.query = 'pizza'
  //       res.results.forEach((element:any) => {
  //         element.is_quick_view_opened = false
  //         element.response_type=element.canonical_id.split(":")[0]
  //         if(element.response_type == 'recipe'){
  //           element.expand_open_allowed = true
  //         }
  //         else{
  //           element.expand_open_allowed = false
  //         }
  //       });
  //       this.recipeData$.next(response)
  //     },
  //     error : (err: HttpErrorResponse)=>{

  //     }
  //   })
  // }

  // https://tasty.co/api/proxy/tasty/search-feed?size=20&from=0&search_terms=burger

  setRecipeData(from: number, size: number, tags: string, query: string) {
    const params = new HttpParams()
      .set('from', String(from))
      .set('size', String(size))
      .set('tags', tags)
      .set('q', query);
      console.log(params);

    this._http
      .get('https://tasty.p.rapidapi.com/recipes/list', {
        headers: this.headers,
        params: params,
      })
      .subscribe({
        next: (res: any) => {
          const response = res;
          response.query = query;
          response.results.forEach((element: any) => {
            element.is_quick_view_opened = false;
  element.response_type=element.canonical_id.split(":")[0]
  if(element.response_type == 'recipe'){
    element.expand_open_allowed = true
  }
  else{
    element.expand_open_allowed = false
  }
          });
          this.recipeData$.next(response);
        },
      });
  }
  getRecipeData() {
    return this.recipeData$;
  }
}
