import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-expand',
  templateUrl: './card-expand.component.html',
  styleUrls: ['./card-expand.component.scss']
})
export class CardExpandComponent {
  @Input() passedData:any
  @Output() closeEmit = new EventEmitter()
  calculateRating(rating:any){

    if(rating){
      const user_rating=Math.round(rating.score * 4) + 1;
      return `${user_rating}/5`
    }
    else{
      return '1/5'
    }
  }
  closeExpand(){
    this.closeEmit.emit()
  }
}
