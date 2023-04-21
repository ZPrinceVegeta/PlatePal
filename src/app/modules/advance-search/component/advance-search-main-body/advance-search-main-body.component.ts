import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-search-main-body',
  templateUrl: './advance-search-main-body.component.html',
  styleUrls: ['./advance-search-main-body.component.scss']
})
export class AdvanceSearchMainBodyComponent{
  
  sampleData:any
  tagList:any;
  result: any = {};

  filterTag(){
    this.tagList.results.forEach((tag:any) => {
      if (!this.result[tag.type]) {
        this.result[tag.type] = [];
      }
      this.result[tag.type].push({ tag_name: tag.name, display_name: tag.display_name });
    });

    console.log(this.result); // Optional: log the resulting object
  }
}
