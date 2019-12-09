import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-gallery',
  templateUrl: './our-gallery.component.html',
  styleUrls: ['./our-gallery.component.scss']
})
export class OurGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" },
    { img: "http://placehold.it/350x150/666666" },
    { img: "http://placehold.it/350x150/666666" },
    { img: "http://placehold.it/350x150/666666" },
    { img: "http://placehold.it/350x150/666666" },
    { img: "http://placehold.it/350x150/666666" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = {
    "dots": false,
    "infinite": true,
    "centerMode": true,
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "speed": 500,
    "arrows": true,
    // "responsive": [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  }
}