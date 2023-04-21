import { MatDialog } from '@angular/material/dialog';
import { BreakpointresponsiveService } from '../../../comman/service/breakpointresponsive.service';
import { AdvncSearchService } from './../../service/advnc-search.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';




@Component({
  selector: 'app-adadv-search-header',
  templateUrl: './adadv-search-header.component.html',
  styleUrls: ['./adadv-search-header.component.scss']
})
export class AdadvSearchHeaderComponent implements OnInit, OnDestroy{
  destroyed$ = new Subject<void>();
  tagData:any=[]
  currentScreenSize!: string;
  filterdIndex: any;
  openStatus: boolean = false;
  constructor(private service:AdvncSearchService,private breakpointService:BreakpointresponsiveService,private dialog:MatDialog){
    this.breakpointService.currentScreenSize$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(size => {
        this.currentScreenSize = size;

        if(this.mealInclusionFiler && (this.currentScreenSize == 'Small' || this.currentScreenSize == 'XSmall')){
          // const dialogRef=this.dialog.open(FilterItemComponent,{panelClass:'full-screen-dialog'})

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
        this.typleList=res
        console.log(this.typleList);

      }
    })
  }

  openFilterBar(){
    this.mealInclusionFiler=!this.mealInclusionFiler

  }
  isfilterdialogOpen():Boolean{
    if(this.mealInclusionFiler){
      if(this.currentScreenSize == 'Small' || this.currentScreenSize == 'XSmall'){
        return(true)
      }
      else{
        return(false)
      }

    }
    else{
      return(false)
    }
  }
  filterListExpandClose(obj:any){
    obj.is_expand_open=!obj.is_expand_open
  }
  checkBoxPush(event:any,data:any){
    if(event.checked){
      const index=this.tagData.findIndex( (item:any) =>item.id === data.id)
      if (index == -1) {
        this.tagData.push(data)
      }
    }
    else{
      const index=this.tagData.findIndex( (item:any) =>item.id === data.id)
      if (index !== -1) {
        this.tagData.splice(index, 1);
      }
    }
  }
  checkIfChecked(data:any):Boolean{
    const index=this.tagData.findIndex( (item:any) =>item.id === data.id)
    if (index !== -1) {
      return true
    }
    else{
      return false
    }
  }

}
function myInputProperty(value: any, arg1: number) {
  throw new Error('Function not implemented.');
}

