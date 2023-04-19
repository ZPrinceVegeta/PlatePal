import { Subscription } from 'rxjs';
import { SearchComponentComponent } from '../../../landing/component/search-component/search-component.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  constructor(private responsive:BreakpointObserver, private dialog:MatDialog){}
  ngOnDestroy() {
    this.breakpoint1.unsubscribe()
    this.breakpoint2.unsubscribe()

  }
  isdeviceLandscape:boolean=false;
  isdevicePotrait:boolean=false
  private breakpoint1:Subscription=new Subscription
  private breakpoint2:Subscription=new Subscription

  ngOnInit(): void {
    this.breakpoint1=this.responsive.observe([Breakpoints.TabletLandscape,Breakpoints.HandsetLandscape]).subscribe({
      next: (res:any)=>{
        this.isdeviceLandscape=false
        if(res.matches){
          this.isdeviceLandscape=true
        }
        // console.log("Landscape",this.isdeviceLandscape);


      }
    })
    this.breakpoint2=this.responsive.observe([Breakpoints.TabletPortrait,Breakpoints.HandsetPortrait]).subscribe({
      next : (res)=>{
        this.isdevicePotrait=false
        if(res.matches){
          this.isdevicePotrait=true
        }
        // console.log("potrait",this.isdevicePotrait);

      }
    })
  }
  openSearch(){
    this.dialog.open(SearchComponentComponent,{panelClass:"full-screen-dialog"})
  }

}
