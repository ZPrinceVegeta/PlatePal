import { MatDialog } from '@angular/material/dialog';
import { BreakpointresponsiveService } from '../../../comman/service/breakpointresponsive.service';
import { AdvncSearchService } from './../../service/advnc-search.service';
import { Component, OnInit, OnDestroy, Input, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ActivatedRoute, ParamMap } from '@angular/router';




@Component({
  selector: 'app-adadv-search-header',
  templateUrl: './adadv-search-header.component.html',
  styleUrls: ['./adadv-search-header.component.scss']
})
export class AdadvSearchHeaderComponent implements OnInit, AfterViewInit, OnDestroy{
  destroyed$ = new Subject<void>();
  tagData:any=[]
  exandInstancePush:any=[]
  currentScreenSize!: string;
  filterdIndex: any;
  openStatus: boolean = false;
  filterDropDownSelectedGroup:any = []
  is_expand_filter_open:Boolean = false
  constructor(private service:AdvncSearchService,private breakpointService:BreakpointresponsiveService,private activatedRoute:ActivatedRoute,private elementRef: ElementRef){
    this.breakpointService.currentScreenSize$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(size => {
        this.currentScreenSize = size;
        if(this.currentScreenSize == 'XSmall' || this.currentScreenSize == 'Small'){
          this.is_expand_filter_open=false
        }
      });
  }
  ngAfterViewInit(): void {
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  typleList:any
  search_text!: string | null;


  mealInclusionFiler:Boolean=false
  private BreakpointObserver1: Subscription = new Subscription
  ngOnInit() {
    this.service.setRecipeData()
    this.activatedRoute.paramMap.subscribe((p:ParamMap)=>{
      this.search_text=p.get('q');
      })
    this.service.getTypeList().subscribe({
      next : (res:any)=>{
        this.typleList=res

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
   checkBoxPushWhileExpand(event:any,data:any){


    if(event.checked){
      const index=this.exandInstancePush.findIndex( (item:any) =>item.id === data.id)
      if (index == -1) {

        this.exandInstancePush.push(data)
      }
    }
    else{
      const index=this.exandInstancePush.findIndex( (item:any) =>item.id === data.id)
      if (index !== -1) {
        this.exandInstancePush.splice(index, 1);
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
  checkIfCheckedExpand(data:any):Boolean{
    const index=this.exandInstancePush.findIndex( (item:any) =>item.id === data.id)
    if (index !== -1) {
      return true
    }
    else{
      return false
    }
  }
  deleteFilterItem(ind:number){
    this.tagData.splice(ind,1)


  }
  clearAll(){
    this.tagData=[]
  }
  openMoreFilterDialog(list:any){
    this.filterDropDownSelectedGroup=list;
    this.is_expand_filter_open = true
    this.exandInstancePush=[...this.tagData]
  }
  applyFilter(){
    this.tagData=[...this.exandInstancePush]
    this.is_expand_filter_open=false

  }
  closeExpandDialog(){
    this.is_expand_filter_open=false
  }

}
// function myInputProperty(value: any, arg1: number) {
//   throw new Error('Function not implemented.');
// }

