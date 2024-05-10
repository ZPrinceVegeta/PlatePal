import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointresponsiveService } from 'src/app/modules/comman/service/breakpointresponsive.service';
import { RecipePageService } from '../../services/recipe-page.service';

@Component({
  selector: 'app-compilation-display',
  templateUrl: './compilation-display.component.html',
  styleUrls: ['./compilation-display.component.scss']
})
export class CompilationDisplayComponent implements OnInit{
  destroyed: Subject<void> = new Subject;
  id : string = ''
  currentScreen !: string;
  compilationResponse : any
  compilationData : any
  constructor(private responsive: BreakpointresponsiveService,private recipeService : RecipePageService , private activatedRoute : ActivatedRoute){
    this.activatedRoute.paramMap.pipe(takeUntil(this.destroyed)).subscribe((p: ParamMap) => {
      this.id = p.get('slug') || '';
      // if(this.wrapper)
      // this.wrapper.nativeElement.scrollTop = 0;
    });
  }
  ngOnInit(): void {
    this.responsive.currentScreenSize$
      .pipe(takeUntil(this.destroyed))
      .subscribe({
        next: (res) => {
          this.currentScreen=res
        },
      });
    // throw new Error('Method not implemented.');
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {

      this.id = p.get('slug') || '';
    });
    this.getRecipeData()
    // this.setVideoFixed()
  }
  getRecipeData(){
    console.log(this.id)
    this.recipeService.getRecipeData(this.id).subscribe({
      next : (res : any)=>{
        console.log(res);

        if(res.message === "Successful"){
          this.compilationResponse = res
          // this.compilationData = this.compilationResponse.data.recipe
          console.log(this.compilationResponse);

          // console.log(this.recipeResponse)
        // this.setInitialise()

        }
        // this.reciepeData = res

      },
      error : ()=>{
      }
    })
  }
}
