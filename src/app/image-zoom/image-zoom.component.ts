import { Component } from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss'],
})
export class ImageZoomComponent {
  isHovered = false;

  setHover(value: boolean) {
    this.isHovered = value;
  }

  hideImage() {
    this.isHovered = false;
  }
}
