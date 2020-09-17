import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Lottie from 'lottie-web';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements AfterViewInit {
  @ViewChild('loader') loader_container:ElementRef;

  constructor() {

  }

  ngAfterViewInit(): void {
    Lottie.loadAnimation({
      container: this.loader_container.nativeElement,
      path: 'assets/logo-load-data.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
    })
  }
}
