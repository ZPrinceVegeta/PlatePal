import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-instruction',
  templateUrl: './recipe-instruction.component.html',
  styleUrls: ['./recipe-instruction.component.scss']
})
export class RecipeInstructionComponent implements OnInit {


  @Input() recipeData : any
  @Input() screenSize! : string
  isRecipeSorted = false;
  ngOnInit(): void {
    // this.setInititalise()
  }
  // setInititalise(){
  //   if(this.recipeData && this.recipeData.instructions){
  //      this.sortInstructionByPosition()
  //   }
  //   else{
  //     setTimeout(() => {
  //       this.setInititalise()
  //     }, 500);
  //   }
  // }
  // sortInstructionByPosition(){
  //   this.recipeData.instructions.sort((a : any , b : any) =>{
  //     return a.position - b.position;
  //   })
  //   console.log(this.recipeData.instructions)
  // }

}
