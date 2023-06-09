import { SearchComponentComponent } from '../search-component/search-component.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Subscription, Subject, takeUntil } from 'rxjs';
// import {*asColorThief}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy{
  imageUrl = 'assets/images/home-bg-img1.jpg';
  container!: HTMLElement;
  currentImageIndex = 0;
  private resizeObserver!: ResizeObserver;

  destroyed = new Subject<void>();
  deviceType: string = '';
  deviceOrientation: string = '';
  // private images=['assets/images/bg-home-img3.jpg','assets/images/bg-home-img8.jpg','assets/images/bg-home-img5.jpg','assets/images/home-bg-img1.jpg','assets/images/home-bg-img2.jpg','assets/images/home-bg-img3.jpg']
  private images = ['assets/images/bg-home-img8.jpg'];
  constructor(
    private elementRef: ElementRef,
    private responsive: BreakpointObserver,
    private dialog: MatDialog
  )
   {
    // this.images.forEach((imageSrc) => {
    //   const image = new Image();
    //   image.src = imageSrc;
    // });
  }
  ngOnDestroy() {
    this.destroyed.next()
    this.destroyed.complete()
    this.resizeObserver.disconnect()
  }

  ngOnInit() {
    this.container = this.elementRef.nativeElement.querySelector(
      '.backgroundimageContainer'
    );
    this.container.style.backgroundImage =
      'url(/assets/images/bg-home-img8.jpg)';
    this.container.style.backgroundPosition = 'center';
    this.container.style.backgroundSize = '100% auto';
    this.container.style.backgroundRepeat = 'no-repeat';
    this.findAspectRatio();
  }

  findAspectRatio() {
    this.responsive.observe(Breakpoints.Web).pipe(takeUntil(this.destroyed)).subscribe({
      next: (res) => {
        if (res.matches) {
          this.deviceType = 'web';
         this.responsive.observe(Breakpoints.WebLandscape).pipe(takeUntil(this.destroyed)).subscribe({
            next: (orientation) => {
              if (orientation.matches) {
                this.deviceOrientation = 'landscape';
              } else {
                this.deviceOrientation = 'potrait';
              }
            },
          });
        }
      },
    });
    this.responsive.observe(Breakpoints.Tablet).pipe(takeUntil(this.destroyed)).subscribe({
      next: (res) => {
        if (res.matches) {
          this.deviceType = 'tablet';
          this.responsive.observe(Breakpoints.TabletLandscape).pipe(takeUntil(this.destroyed)).subscribe({
            next: (orientation) => {
              if (orientation.matches) {
                this.deviceOrientation = 'landscape';
              } else {
                this.deviceOrientation = 'potrait';
              }
            },
          });
        }
      },
    });
    this.responsive.observe(Breakpoints.Handset).pipe(takeUntil(this.destroyed)).subscribe({
      next: (res) => {
        if (res.matches) {
          this.deviceType = 'handset';
        this.responsive.observe(Breakpoints.HandsetLandscape).pipe(takeUntil(this.destroyed)).subscribe({
            next: (orientation) => {
              if (orientation.matches) {
                this.deviceOrientation = 'landscape';
              } else {
                this.deviceOrientation = 'potrait';
              }
            },
          });
        }
      },
    });
    this.resizeObserver = new ResizeObserver((entries) => {
      const screenWidth = entries[0].contentRect.width;
      // console.log('Screen width:', screenWidth);
      if (screenWidth > 1423) {
        this.container.style.height = '800px';
        this.container.style.backgroundSize = '100% auto';
      } else if (screenWidth > 1071) {
        this.container.style.height = '600px';
        this.container.style.backgroundSize = '100% auto';
      } else {
        this.container.style.backgroundSize = 'cover';
        this.container.style.height = '500px';
        this.container.style.backgroundPosition = 'center top';
      }
    });

    // Observe changes to the size of the viewport
    this.resizeObserver.observe(document.body);
  }
  openSearch() {
    this.dialog.open(SearchComponentComponent, {
      panelClass: 'full-screen-dialog',
    });
  }
}
