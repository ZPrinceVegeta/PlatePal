import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-video',
  templateUrl: './recipe-video.component.html',
  styleUrls: ['./recipe-video.component.scss']
})
export class RecipeVideoComponent {
  @Input() url! : string
  @Input() screenSize! : string

}
