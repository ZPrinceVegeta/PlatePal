import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit,OnDestroy{
  responsiveTopBar:Boolean=false
  private breakpoint:Subscription= new Subscription
  constructor(private responsive:BreakpointObserver){}
  ngOnDestroy(): void {
    this.breakpoint.unsubscribe()
  }
  ngOnInit() {
    this.breakpoint=this.responsive.observe([Breakpoints.TabletPortrait,Breakpoints.Handset]).subscribe({
      next : (res)=>{
        this.responsiveTopBar=false
        console.log(res.breakpoints,res.matches);
        if(res.matches){
          this.responsiveTopBar=true
        }
      }
    }
    )
  }

}
