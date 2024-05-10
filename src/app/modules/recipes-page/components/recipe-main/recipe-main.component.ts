import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-main',
  templateUrl: './recipe-main.component.html'
})
export class RecipeMainComponent {
  isRecipe !:boolean
  isComilatiom !: boolean
  constructor(private router: Router){
    if(router.url.split(';')[0] == '/recipe'){
      this.isRecipe = true
    }
    else if(router.url.split(';')[0] == '/compilation'){
      this.isComilatiom = true
    }


  }


}
