import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipePageService } from './../../services/recipe-page.service';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { BreakpointresponsiveService } from 'src/app/modules/comman/service/breakpointresponsive.service';
import { takeUntil, Subject } from 'rxjs';
import { CommonHelperClass } from 'src/app/modules/comman/helpers/commonhelper';

@Component({
  selector: 'app-recipe-page-display',
  templateUrl: './recipe-page-display.component.html',
  styleUrls: ['./recipe-page-display.component.scss'],
})
export class RecipePageDisplayComponent implements OnInit , OnDestroy {
  destroyed: Subject<void> = new Subject;
  currentScreen !: string;
  savedStatus = false;
  constructor(private responsive: BreakpointresponsiveService,private recipeService : RecipePageService , private activatedRoute : ActivatedRoute){
    this.activatedRoute.paramMap.pipe(takeUntil(this.destroyed)).subscribe((p: ParamMap) => {
      this.id = p.get('slug') || '';
      if(this.wrapper)
      this.wrapper.nativeElement.scrollTop = 0;
    });
  }
  id : string = ''
  reciepeData : any;
  userScore! : number
  userScoreArray!: any[];
  savedRecipeArray : any;
  recipeResponse : any;
  isFixed: boolean = false;
  @ViewChild('recipeBtm', { static: true }) recipeBtm!: HTMLElement;
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: HTMLElement;
  @ViewChild('wrapper', { static: false }) wrapper!: ElementRef;



  private CommonHelper : CommonHelperClass = new CommonHelperClass()
  ngOnInit(): void {
    this.responsive.currentScreenSize$
      .pipe(takeUntil(this.destroyed))
      .subscribe({
        next: (res) => {
          this.currentScreen=res
          // this.reciepeData
        },
      });
    // throw new Error('Method not implemented.');
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {

      this.id = p.get('id') || '';
      this.recipeResponse = undefined
      this.reciepeData = undefined

      this.getRecipeData()

    });

  }
  ngOnDestroy() {
      this.destroyed.next()
      this.destroyed.complete()
  }

  getRecipeData(){
    console.log(this.id)
    this.recipeService.getRecipeData(this.id).subscribe({
      next : (res : any)=>{
        if(res){
          this.recipeResponse = res
          // this.reciepeData = this.recipeResponse.data.recipe
          console.log(this.recipeResponse)
          this.setInitialise()

        }
        // this.reciepeData = res

      },
      error : ()=>{
      }
    })
  }
  saveRecipe(flag : boolean){
    this.savedStatus = flag
    if(flag){
      this.CommonHelper.addRecipeToFav(this.reciepeData);
    }
    else{
      this.CommonHelper.removeRecipeFromFav(this.reciepeData)
    }

  }
  setInitialise(){
    console.log("here");

    if(this.recipeResponse && this.recipeResponse.user_ratings){
       this.userScore = (this.recipeResponse.user_ratings.score * 5)
      console.log(this.userScore);

      this.userScoreArray = []
      for( let i=1 ; i <= this.userScore ; i ++){
        this.userScoreArray.push('full')
      }
      if((this.userScore - Math.floor(this.userScore)) > 0){
        this.userScoreArray.push("half")
      }
      if(this.userScoreArray.length < 5){
        for(let i = this.userScoreArray.length +1 ; i<= 5 ; i++){
          this.userScoreArray.push('empty')
        }
      }

    }
    // this.savedStatus = this.CommonHelper.checkIfRecipeIsSaved(this.reciepeData?.id)


  }
  onParentScroll(event: Event) {
    // Adjust this value as needed for when you want the child div to become fixed
    const scrollThreshold = 100; // Change this value to suit your needs

    if ((event.target as HTMLElement).scrollTop >= scrollThreshold) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

}
