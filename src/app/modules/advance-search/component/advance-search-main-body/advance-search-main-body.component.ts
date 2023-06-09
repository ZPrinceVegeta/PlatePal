import { takeUntil, Subject } from 'rxjs';
import { BreakpointresponsiveService } from './../../../comman/service/breakpointresponsive.service';
import { AdvncSearchService } from './../../service/advnc-search.service';
import { SearchComponentComponent } from './../../../landing/component/search-component/search-component.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-advance-search-main-body',
  templateUrl: './advance-search-main-body.component.html',
  styleUrls: ['./advance-search-main-body.component.scss']
})
export class AdvanceSearchMainBodyComponent implements OnInit,OnDestroy{
  currentScreenSize:string=''
  destroyed = new Subject<void>()
  recipeData:any
  constructor(private searchService:AdvncSearchService,private responsiveService:BreakpointresponsiveService){
    // dialogRef.close()
  }
  ngOnDestroy(): void {
    this.destroyed.next()
    this.destroyed.complete()
  }
  ngOnInit() {
    this.responsiveService.currentScreenSize$.pipe(takeUntil(this.destroyed)).subscribe({
      next : (res)=>{
        this.currentScreenSize=res
        console.log(this.currentScreenSize);

      }
    })
   this.searchService.getRecipeData().subscribe({
    next : (res)=>{
      this.recipeData=res
      console.log(res);
    }
   })
  }

  changeQuickFlag(id:any){
    this.recipeData.results.forEach((element:any) => {
      element.is_quick_view_opened=false
    });
    const objectToModify = this.recipeData.results.find((obj:any) => obj.id == id)
    if(objectToModify){
      objectToModify.is_quick_view_opened=true
    }





  }
  closeExpand(){
    this.recipeData.results.forEach((element:any) => {
      element.is_quick_view_opened=false
    });
  }

}
