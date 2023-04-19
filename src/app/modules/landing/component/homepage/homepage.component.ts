import { SearchComponentComponent } from '../search-component/search-component.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private breakPointSubWeb!:Subscription
  private breakPointSubWebLandscape!:Subscription
  private breakPointSubTab!:Subscription
  private breakPointSubTabLandscape!:Subscription

  private breakPointSubMob!:Subscription
  private breakPointSubMobLandscape!:Subscription



  deviceType: string = '';
  deviceOrientation: string = '';
  // private images=['assets/images/bg-home-img3.jpg','assets/images/bg-home-img8.jpg','assets/images/bg-home-img5.jpg','assets/images/home-bg-img1.jpg','assets/images/home-bg-img2.jpg','assets/images/home-bg-img3.jpg']
  private images = ['assets/images/bg-home-img8.jpg'];
  constructor(
    private elementRef: ElementRef,
    private responsive: BreakpointObserver,
    private dialog: MatDialog
  ) {
    this.images.forEach((imageSrc) => {
      const image = new Image();
      image.src = imageSrc;
    });
  }
  ngOnDestroy() {
    this.breakPointSubMob.unsubscribe()
    this.breakPointSubMobLandscape.unsubscribe()
    this.breakPointSubTab.unsubscribe()
    this.breakPointSubTabLandscape.unsubscribe()
    this.breakPointSubWeb.unsubscribe()
    this.breakPointSubWebLandscape.unsubscribe()
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
    this.switchBgImage();
  }
  switchBgImage() {
    // setInterval(() => {
    //   // Change the background image to the next image in the array
    //   this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    //   this.container.style.backgroundImage = `url(${this.images[this.currentImageIndex]})`;
    // }, 10000); // Change the image every 10 seconds
  }
  findAspectRatio() {
    this.breakPointSubWeb=this.responsive.observe(Breakpoints.Web).subscribe({
      next: (res) => {
        if (res.matches) {
          this.deviceType = 'web';
          this.breakPointSubWebLandscape=this.responsive.observe(Breakpoints.WebLandscape).subscribe({
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
    this.breakPointSubTab=this.responsive.observe(Breakpoints.Tablet).subscribe({
      next: (res) => {
        if (res.matches) {
          this.deviceType = 'tablet';
          this.breakPointSubTabLandscape=this.responsive.observe(Breakpoints.TabletLandscape).subscribe({
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
    this.responsive.observe(Breakpoints.Handset).subscribe({
      next: (res) => {
        if (res.matches) {
          this.deviceType = 'handset';
          this.breakPointSubMobLandscape=this.responsive.observe(Breakpoints.HandsetLandscape).subscribe({
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
