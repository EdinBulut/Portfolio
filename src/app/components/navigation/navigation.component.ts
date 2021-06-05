import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  current = 'home';
  isBurger = false;
  isXvisible = false;
  home: number;
  about: number;
  portfolio: number;
  contact: number;



  @HostListener('window:load', ['$event'])
  onLoad(event: Event): void {
    this.home = document.getElementById('home').getBoundingClientRect().height;
    this.about = document.getElementById('about').getBoundingClientRect().height;
    this.portfolio = document.getElementById('portfolio').getBoundingClientRect().height;
    this.contact = document.getElementById('contact').getBoundingClientRect().height;
    if (window.innerWidth < 992) {
      this.isBurger = true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.home = document.getElementById('home').getBoundingClientRect().height;
    this.about = document.getElementById('about').getBoundingClientRect().height;
    this.portfolio = document.getElementById('portfolio').getBoundingClientRect().height;
    this.contact = document.getElementById('contact').getBoundingClientRect().height;

    if (window.innerWidth < 992 ) {
      this.isBurger = true;
      // console.log('innerWidth: ' + window.innerWidth);
    } else {
      this.isBurger = false;
      this.isXvisible = false;
    }
    const Y = window.scrollY;
    if (Y < this.home * .6) {
      this.current = 'home';
    } else if (Y < this.home + this.about * .6) {
      this.current = 'about';
    } else if (Y < this.home + this.about + this.portfolio * .6) {
      this.current = 'portfolio';
    } else if (Y > this.home + this.about + this.portfolio * .6) {
      this.current = 'contact';
    }
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event): void {
    const Y = window.scrollY;
    if (Y < this.home * .6) {
      this.current = 'home';
    } else if (Y < this.home + this.about * .6) {
      this.current = 'about';
    } else if (Y < this.home + this.about + this.portfolio * .6) {
      this.current = 'portfolio';
    } else if (Y > this.home + this.about + this.portfolio * .6) {
      this.current = 'contact';
    }
  }

  constructor(private smooth: SimpleSmoothScrollService) { }

  ngOnInit(): void {
    this.home = document.getElementById('home').getBoundingClientRect().height;
    this.about = document.getElementById('about').getBoundingClientRect().height;
    this.portfolio = document.getElementById('portfolio').getBoundingClientRect().height;
    this.contact = document.getElementById('contact').getBoundingClientRect().height;
    if (window.innerWidth < 992) {
      this.isBurger = true;
    }
  }

  // ngAfterViewInit(): void {
  //   this.home = document.getElementById('home').getBoundingClientRect().height;
  //   this.about = document.getElementById('about').getBoundingClientRect().height;
  //   this.portfolio = document.getElementById('portfolio').getBoundingClientRect().height;
  //   this.contact = document.getElementById('contact').getBoundingClientRect().height;
  //   if (window.innerWidth < 992) {
  //     this.isBurger = true;
  //   }
  // }

  navig(id): void {
    this.current = id;
    if (id === 'home') {
      this.smooth.smoothScrollToTop({ duration: 600, easing: 'linear' });
    } else if (id === 'about') {
      this.smooth.smoothScroll(this.home, { duration: 600, easing: 'linear' });
    } else if (id === 'portfolio') {
      this.smooth.smoothScroll(this.home + this.about, { duration: 600, easing: 'linear' });
      console.log(document.getElementById('portfolio'));
    } else if (id === 'contact') {
      this.smooth.smoothScroll((this.home + this.about + this.portfolio), { duration: 600, easing: 'linear' });
    }
    this.isXvisible = false;
  }


  showMenu(): void {
    // this.isBurger = !this.isBurger;
    this.isXvisible = !this.isXvisible;
  }
}
