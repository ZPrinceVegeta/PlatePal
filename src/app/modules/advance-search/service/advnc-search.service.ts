import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvncSearchService {
  recipeData$ = new Subject<any>();
  constructor(private _http:HttpClient) { }
  getTypeList(){
    return this._http.get("assets/json/taglist.json")
  }
  setRecipeData(){
    this._http.get("assets/json/sampleRecipeList.json").subscribe({
      next : (res:any) =>{
        const response=res
        response.query = 'pizza'
        res.results.forEach((element:any) => {
          element.is_quick_view_opened = false
        });
        this.recipeData$.next(response)
      }
    })
  }
  getRecipeData(){
    return this.recipeData$
  }
}
