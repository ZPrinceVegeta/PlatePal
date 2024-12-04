import { takeUntil, Subject } from 'rxjs';
import { BreakpointresponsiveService } from './../../../comman/service/breakpointresponsive.service';
import { AdvncSearchService } from './../../service/advnc-search.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AdadvSearchHeaderComponent } from '../adadv-search-header/adadv-search-header.component';

@Component({
  selector: 'app-advance-search-main-body',
  templateUrl: './advance-search-main-body.component.html',
  styleUrls: ['./advance-search-main-body.component.scss']
})
export class AdvanceSearchMainBodyComponent implements OnInit,OnDestroy{
  currentScreenSize:string=''
  destroyed = new Subject<void>()
  recipeData:any;
  public loaderNum = Array(12)
  @ViewChild('cardContainer') cardContainer!: ElementRef;
  @ViewChild('body') bodyContainer!: ElementRef;
  @ViewChild(AdadvSearchHeaderComponent) advancedSearchHeader!: AdadvSearchHeaderComponent;


  constructor(private searchService:AdvncSearchService,private responsiveService:BreakpointresponsiveService , private renderer : Renderer2){
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

      setTimeout(() => {
        this.scrollToOpenElement();
      } , 200);
    }

  }
  scrollToOpenElement() {
    if (this.cardContainer) {
      const wrapperElements = this.cardContainer.nativeElement.querySelectorAll('.wrapper');
      wrapperElements.forEach((wrapperElement : any) => {
        const openElement = wrapperElement.querySelector('.open');
        if (openElement) {

          openElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      });
    }
  }
  isLoading = false;
  onScroll(){
    const element = this.bodyContainer.nativeElement;

    // Calculate scroll position
    const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
    // console.log("next cvcall");

    if (atBottom && !this.isLoading) {
      this.loadNextPage(); // Call your API for the next page
      console.log("next call");

    }
  }
  loadNextPage(){
    this.advancedSearchHeader.nextPage()
  }

  closeExpand(){
    this.recipeData.results.forEach((element:any) => {
      element.is_quick_view_opened=false
    });
  }

}
