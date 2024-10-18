import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingServiceService {
  constructor(private http: HttpClient) {}


 headers = new HttpHeaders({
    'X-Rapidapi-Key': 'cd2d3af89dmshf0c679291c77752p1845fbjsn079977aa0cdd',
    'X-Rapidapi-Host': 'tasty.p.rapidapi.com',
  });


  getTypeList() {
    return this.http.get('assets/json/taglist.json');
  }
    setRecipeData( tags: string) {
    const params = new HttpParams()
      .set('from', String(0))
      .set('size', String(10))
      .set('tags', tags)
      console.log(params);

   return this.http
      .get('https://tasty.p.rapidapi.com/recipes/list', {
        headers: this.headers,
        params: params,
      })
  }

}
