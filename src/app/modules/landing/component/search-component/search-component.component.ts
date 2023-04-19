import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit{
  responsiveTopBar:Boolean=false
  constructor(private responsive:BreakpointObserver){}
  ngOnInit() {
    this.responsive.observe([Breakpoints.TabletPortrait,Breakpoints.Handset]).subscribe({
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
