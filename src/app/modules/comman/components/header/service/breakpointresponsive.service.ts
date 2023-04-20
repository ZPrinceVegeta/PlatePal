import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointresponsiveService {

  currentScreenSize$: Observable<string>;

  private displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.currentScreenSize$ = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map(result => {
          const matches = Object.keys(result.breakpoints)
            .filter(breakpoint => result.breakpoints[breakpoint]);
          return matches.length > 0 ? this.displayNameMap.get(matches[0]) ?? 'Unknown' : 'Unknown';
        }),
        shareReplay()
      );
  }
}
