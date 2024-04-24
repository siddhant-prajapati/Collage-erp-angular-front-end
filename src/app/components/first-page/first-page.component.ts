import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [NgbCarouselModule, RouterLink, NgOptimizedImage],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css',
})
export class FirstPageComponent {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    '../../../assets/images/first-page/campus1.jpg',
    '../../../assets/images/first-page/campus2.jpg',
    '../../../assets/images/first-page/campus3.jpg',
  ]
}
