import { Subscription, Subject, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit,OnDestroy{
  responsiveTopBar:Boolean=false;
  searchQuery:string = ''
  destroyed = new Subject<void>();
  constructor(private responsive:BreakpointObserver,private router:Router,private dialogRef:MatDialogRef<SearchComponentComponent>){}
  ngOnDestroy(): void {
    this.destroyed.next()
    this.destroyed.complete()
  }
  ngOnInit() {
    this.responsive.observe([Breakpoints.TabletPortrait,Breakpoints.Handset]).pipe(takeUntil(this.destroyed)).subscribe({
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
  SearchFood(){
    this.dialogRef.close()
    if(this.searchQuery){
      this.router.navigate(['/search',{q:this.searchQuery}])

    }
  }

}
