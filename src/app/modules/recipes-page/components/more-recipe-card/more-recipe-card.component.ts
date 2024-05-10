import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-recipe-card',
  templateUrl: './more-recipe-card.component.html',
  styleUrls: ['./more-recipe-card.component.scss']
})
export class MoreRecipeCardComponent {
  constructor(private router : Router){}
  @Input() cardData: any
  @Input() screenSize !: string;
  ngOnInit(){
   this.cardData.name = this.dishName(this.cardData.name)

  }
  dishName(name : string) : string{
    if(name.toLowerCase().indexOf('as made by') > -1){
      let newName = name.slice(0 , name.toLowerCase().indexOf('as made by') )
      this.cardData.author = name.slice(name.toLowerCase().indexOf('by')+3 , name.length )
      return newName
    }
    else{
      if(this.cardData?.credits && this.cardData?.credits[0].name){
        this.cardData.author = this.cardData?.credits[0].name
      }
      return name
    }


  }
  routeTorecipe(){
    // if(this.cardData.type == 'recipe')
    // this.router.navigate(['/recipe',{slug:this.cardData?.slug}])
    if (this.cardData.type === 'recipe') {
      const slug = this.cardData?.slug;
      this.router.navigate(['/recipe', { slug }]);
      // this.reloadPage();
    }
  }
  reloadPage() {

  }
}
