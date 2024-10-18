import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchComponentComponent } from '../search-component/search-component.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LandingServiceService } from '../../services/landing-service.service';
import { BreakpointresponsiveService } from 'src/app/modules/comman/service/breakpointresponsive.service';

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
  private images=['assets/images/bg-home-img3.jpg','assets/images/bg-home-img8.jpg','assets/images/bg-home-img5.jpg','assets/images/home-bg-img1.jpg','assets/images/home-bg-img2.jpg','assets/images/home-bg-img3.jpg']
  // private images = ['assets/images/bg-home-img8.jpg'];
  @ViewChild('slideBody') private slideBody !: ElementRef
  dietryTypeList : any = []
  recipeArr :any = []
  private intervalId: any;
  currentScreenSize = '';
  cardLoader = false
  constructor(
    private elementRef: ElementRef,
    private breakpointService: BreakpointresponsiveService,
    private dialog: MatDialog,
    private landing_service:LandingServiceService,
    private router : Router


  )
   {
    this.breakpointService.currentScreenSize$
    .pipe(takeUntil(this.destroyed))
    .subscribe((size) => {
      this.currentScreenSize = size;
    });
  }
  ngOnDestroy() {
    this.destroyed.next()
    this.destroyed.complete()
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.resizeObserver.disconnect()

  }

  ngOnInit() {
    this.container = this.elementRef.nativeElement.querySelector(
      '.backgroundimageContainer'
    );
    this.updateBackgroundImage();

    this.intervalId = setInterval(() => {
      this.updateBackgroundImage();
    }, 10000); // Change image every 10 seconds

    this.findAspectRatio();
    this.landing_service.getTypeList().subscribe({
      next: (res: any) => {
        console.log(res);

        if(res){
          // this.dietryTypeList = [{name: 'all', display_name: 'All', id: null}]
          this.dietryTypeList = res.food_type.find((type : any) => type.type == "dietary")
          this.dietryTypeList.type_list.map((type : any) => type.selected = false)
          this.dietryTypeList.type_list.unshift({name: '', display_name: 'All', id: '' , selected : true})
          this.getDietryTypeRecipeList('')
        }
        console.log(this.dietryTypeList);

      },
    });

  }


  private updateBackgroundImage() {
    this.container.style.backgroundImage = `url(${this.images[this.currentImageIndex]})`;
    this.container.style.backgroundPosition = 'center';
    this.container.style.backgroundSize = '100% auto';
    this.container.style.backgroundRepeat = 'no-repeat';

    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  findAspectRatio() {
    // this.responsive.observe(Breakpoints.Web).pipe(takeUntil(this.destroyed)).subscribe({
    //   next: (res) => {
    //     if (res.matches) {
    //       this.deviceType = 'web';
    //      this.responsive.observe(Breakpoints.WebLandscape).pipe(takeUntil(this.destroyed)).subscribe({
    //         next: (orientation) => {
    //           if (orientation.matches) {
    //             this.deviceOrientation = 'landscape';
    //           } else {
    //             this.deviceOrientation = 'potrait';
    //           }
    //         },
    //       });
    //     }
    //   },
    // });
    // this.responsive.observe(Breakpoints.Tablet).pipe(takeUntil(this.destroyed)).subscribe({
    //   next: (res) => {
    //     if (res.matches) {
    //       this.deviceType = 'tablet';
    //       this.responsive.observe(Breakpoints.TabletLandscape).pipe(takeUntil(this.destroyed)).subscribe({
    //         next: (orientation) => {
    //           if (orientation.matches) {
    //             this.deviceOrientation = 'landscape';
    //           } else {
    //             this.deviceOrientation = 'potrait';
    //           }
    //         },
    //       });
    //     }
    //   },
    // });
    // this.responsive.observe(Breakpoints.Handset).pipe(takeUntil(this.destroyed)).subscribe({
    //   next: (res) => {
    //     if (res.matches) {
    //       this.deviceType = 'handset';
    //     this.responsive.observe(Breakpoints.HandsetLandscape).pipe(takeUntil(this.destroyed)).subscribe({
    //         next: (orientation) => {
    //           if (orientation.matches) {
    //             this.deviceOrientation = 'landscape';
    //           } else {
    //             this.deviceOrientation = 'potrait';
    //           }
    //         },
    //       });
    //     }
    //   },
    // });
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
  selectDietryType(type : any){
    this.dietryTypeList.type_list.map((type : any) => type.selected = false)
    type.selected = true;
    this.getDietryTypeRecipeList(type.name)
  }
  getDietryTypeRecipeList(type : string){
    this.cardLoader = true;
    this.landing_service.setRecipeData(type).subscribe({
      next : (res : any) =>{
      this.cardLoader = false;

        console.log('recipe response' , res);
        this.recipeArr = res.results;
        this.slideBody.nativeElement.style.marginLeft = '0px'
      },
      error : ( err : HttpErrorResponse) =>{
        this.cardLoader = false;
      }
    })
  }
  // slideCard(direction : string){
  //   let marginLeft = this.slideBody.nativeElement.style.marginLeft ? this.slideBody.nativeElement.style.marginLeft : 'calc(0%)'
  //   // console.log(this.arr.length);
  //   if(direction == 'l'){
  //     this.slideBody.nativeElement.style.marginLeft = `calc(-102% + ${marginLeft})`
  //   }
  //   if(direction == 'r' && marginLeft != 'calc(0%)' ){
  //     this.slideBody.nativeElement.style.marginLeft = `calc(102% + ${marginLeft})`
  //   }
  //   console.log( this.slideBody.nativeElement);
  // }
  slideCard(direction: string) {
    const slideContainerWidth = this.slideBody.nativeElement.offsetWidth; // The visible width of the container
    const contentWidth = this.slideBody.nativeElement.scrollWidth; // The full width of the content (including overflow)
    let marginLeft = this.slideBody.nativeElement.style.marginLeft
      ? parseFloat(this.slideBody.nativeElement.style.marginLeft.replace('calc(', '').replace('%', '').replace(')', ''))
      : 0;

    const slideWidth = 102; // The width of each slide in percentage

    // Calculate the maximum negative margin (content overflow)
    const maxNegativeMargin = -((contentWidth - slideContainerWidth) / slideContainerWidth) * 100;

    if (direction === 'l') {
      // Slide left if there's more content to show
      if (marginLeft > maxNegativeMargin) {
        this.slideBody.nativeElement.style.marginLeft = `calc(${marginLeft - slideWidth}%)`;
      }
    }

    if (direction === 'r') {
      // Slide right only if we're not already at the start (i.e., marginLeft is not 0)
      if (marginLeft < 0) {
        this.slideBody.nativeElement.style.marginLeft = `calc(${marginLeft + slideWidth}%)`;
      }
    }

    console.log(this.slideBody.nativeElement.style.marginLeft);
  }
  routeTorecipe(cardData : any){
    console.log(cardData);

    // if(this.cardData.type == 'recipe')
    // this.router.navigate(['/recipe',{slug:this.cardData?.slug}])
    // if (cardData.type === 'recipe') {
      const slug = cardData?.slug;
      if(slug)
      this.router.navigate(['/recipe', { slug }]);
      // this.reloadPage();
    // }
  }
  advancedSearch(){
    this.router.navigate(['/search']);
  }
}
