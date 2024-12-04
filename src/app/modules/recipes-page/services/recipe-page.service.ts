import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipePageService {

  constructor(private http : HttpClient) {}
  // getRecipeData(id: string): Observable<any> {
  //   let apiUrl = 'https://tasty.p.rapidapi.com/recipes/get-more-info';
  //   let headers = new HttpHeaders({
  //     'x-rapidapi-key': 'cd2d3af89dmshf0c679291c77752p1845fbjsn079977aa0cdd',
  //     'x-rapidapi-host': 'tasty.p.rapidapi.com',
  //   });
  //   return this.http.get(`${apiUrl}?id=${id}`, { headers: headers });
  // }
  getRecipeData(slug: string){
    return this.http.get('assets/json/sampleRecipe.json')
  }
  getComilationData(slug : string){

  }
}
