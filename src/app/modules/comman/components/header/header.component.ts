import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private responsive:BreakpointObserver){}
  isdeviceLandscape:boolean=false;
  isdevicePotrait:boolean=false
  ngOnInit(): void {
    this.responsive.observe([Breakpoints.TabletLandscape,Breakpoints.HandsetLandscape]).subscribe({
      next: (res:any)=>{
        this.isdeviceLandscape=false
        if(res.matches){
          this.isdeviceLandscape=true
        }
        // console.log("Landscape",this.isdeviceLandscape);


      }
    })
    this.responsive.observe([Breakpoints.TabletPortrait,Breakpoints.HandsetPortrait]).subscribe({
      next : (res)=>{
        this.isdevicePotrait=false
        if(res.matches){
          this.isdevicePotrait=true
        }
        // console.log("potrait",this.isdevicePotrait);

      }
    })
  }

}
