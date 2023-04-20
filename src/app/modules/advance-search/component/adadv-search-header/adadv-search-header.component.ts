import { FilterItemComponent } from './../filter-item/filter-item.component';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointresponsiveService } from './../../../comman/components/header/service/breakpointresponsive.service';
import { AdvncSearchService } from './../../service/advnc-search.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-adadv-search-header',
  templateUrl: './adadv-search-header.component.html',
  styleUrls: ['./adadv-search-header.component.scss']
})
export class AdadvSearchHeaderComponent implements OnInit, OnDestroy{
  destroyed$ = new Subject<void>();
  currentScreenSize!: string;
  constructor(private service:AdvncSearchService,private breakpointService:BreakpointresponsiveService,private dialog:MatDialog){
    this.breakpointService.currentScreenSize$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(size => {
        this.currentScreenSize = size;
        if(this.mealInclusionFiler && (this.currentScreenSize == 'Small' || this.currentScreenSize == 'XSmall')){

        }
        console.log(this.currentScreenSize);
      });
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  typleList:any
  search_text:string='rect'
  mealInclusionFiler:Boolean=false
  private BreakpointObserver1: Subscription = new Subscription
  ngOnInit() {
    this.service.getTypeList().subscribe({
      next : (res:any)=>{
        // console.log(res);

        this.typleList=res
      }
    })
  }

  openFilterBar(){
    this.mealInclusionFiler=!this.mealInclusionFiler
    if(this.currentScreenSize == 'Small' || this.currentScreenSize == 'XSmall'){
      const dialogRef=this.dialog.open(FilterItemComponent,{panelClass:'full-screen-dialog'})
    }
  }
}
