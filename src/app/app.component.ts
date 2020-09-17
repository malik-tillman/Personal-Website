import { Component, AfterViewInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, NavigationCancel, NavigationError } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Root';

  public isBackground = false;

  public loaded = false;

  constructor(
    private router:Router,
    private loader:LoadingBarService
  ) {
    /* Subscribe to routing service */
    this.router.events.subscribe(async (event) => {
      this.loaded = false;
      document.body.style.overflow = 'hidden';

      if(event instanceof NavigationStart) {
        this.loader.useRef().start();
      }

      else {
        await this.sleep(500);
        this.loader.useRef().complete();

        await this.sleep(500);
        this.loaded = true;
        document.body.style.overflow = 'unset';
      }
    })
  }

  /**
   * Async Sleep Function
   *  Sleeps operations for a given time
   *
   * @param ms: Amount of time should sleep for.
   */
  async sleep(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}
