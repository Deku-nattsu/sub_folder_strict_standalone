import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FooComponent } from './strict/foo.component';

@Component({
  selector: 'app-root',
  template: `
    <foo/>
  `,
  imports: [FooComponent]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
