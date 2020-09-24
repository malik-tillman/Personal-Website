import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typedConfig = {
    strings: [
      'Web Design',
      'Photography',
      'Videography',
      'Marketing',
      'Advertisement',
      'Android Development',
      'Game Development'
    ],
    typeSpeed: 75,
    backSpeed: 100,
    backDelay: 1000,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '',
    autoInsertCss: true,
    loop: true,
    shuffle: true
  };

  static addPeriod(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] + '.';
    }
    return arr;
  }

  constructor() {}

  ngOnInit(): void {
    this.typedConfig.strings = HomeComponent.addPeriod(this.typedConfig.strings);
    const typedName = new Typed('#typed', this.typedConfig);
    typedName.start();
  }
}
