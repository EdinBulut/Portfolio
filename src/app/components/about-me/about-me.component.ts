import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  currentYear = new Date().getFullYear();
  myYears = this.currentYear - 1993;

  constructor() { }

  ngOnInit(): void {
  }

}
