import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-expand',
  templateUrl: './card-expand.component.html',
  styleUrls: ['./card-expand.component.scss']
})
export class CardExpandComponent {
  @Input() passedData:any
  calculateRating(rating:any){

    if(rating){
      const user_rating=Math.round(rating.score * 4) + 1;
      return `${user_rating}/5`
    }
    else{
      return '1/5'
    }


  }
}
