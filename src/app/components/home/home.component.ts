import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'red',
      typeSpeed: 130,
      deleteSpeed: 80,
    });

    writer
      .strings(
        400,
        'Web Developer',
        'Mechanical Engineer',
        'CNC Machinist'
      )
      .start();

  }

}
