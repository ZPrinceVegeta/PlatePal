import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipePageService {

  constructor(private http : HttpClient) {}
  getRecipeData(slug : string){
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'cd2d3af89dmshf0c679291c77752p1845fbjsn079977aa0cdd',
      'X-RapidAPI-Host': 'tasty-co.p.rapidapi.com',
    });

    const url = `https://tasty-co.p.rapidapi.com/recipes/detail?slug=${slug}`;

    return this.http.get(url, { headers })
  }
  // getRecipeData(slug: string){
  //   return this.http.get('assets/json/sampleRecipe.json')
  // }
  getComilationData(slug : string){

  }
}
