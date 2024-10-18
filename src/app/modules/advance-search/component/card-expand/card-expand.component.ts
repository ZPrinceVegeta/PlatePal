import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-expand',
  templateUrl: './card-expand.component.html',
  styleUrls: ['./card-expand.component.scss']
})
export class CardExpandComponent {
  @Input() passedData:any
  @Output() closeEmit = new EventEmitter()
  constructor(private router : Router){}
  calculateRating(rating:any){

    if(rating){
      const user_rating=Math.round(rating.score * 4) + 1;
      return `${user_rating}/5`
    }
    else{
      return '1/5'
    }
  }
  viewRecipe() {
    if(this.passedData.response_type.toLowerCase() == 'recipe'){
      this.router.navigate(['/recipe',{slug:this.passedData?.slug}])
    }

  }
  closeExpand(){
    this.closeEmit.emit()
  }
}
