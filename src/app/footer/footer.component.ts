import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  randomFactsTypedConfig:object = {
    strings: [
      'Welcome to MalikTillman.com!',
      '"What\'s science to a man that can\'t apply it?" - Roc Marciano',
      'I build sites 💻 and make videos 🎥',
      'This site was designed and developed by Malik Tillman',
      'I\'m always looking to collaborate, hit my line!',
      'A Leek Production'
    ],
    typeSpeed: 25,
    backSpeed: 50,
    backDelay: 10000,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '',
    autoInsertCss: true,
    loop: true,
    shuffle: true
  };

  constructor() { }

  ngOnInit(): void {
    const typedName = new Typed('.footer-text', this.randomFactsTypedConfig);
    typedName.start();
  }

}
