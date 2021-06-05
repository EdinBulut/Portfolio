import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView: 1,
    // autoplay: true,

    effect: 'coverflow',
    grabCursor: true,
    // slidesPerView: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 3000,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    }
};

  constructor() { }

  ngOnInit(): void {}

}
