import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvncSearchService {

  constructor(private _http:HttpClient) { }
  getTypeList(){
    return this._http.get("assets/json/taglist.json")
  }
}
