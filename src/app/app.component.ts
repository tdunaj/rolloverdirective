import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <img [appRollover]="{
    'initial':'https://unsplash.it/200/300?image=201',
    'over':'https://unsplash.it/200/300?image=202'
  }"/> 
  `
})
export class AppComponent {
  title = 'app';
}
