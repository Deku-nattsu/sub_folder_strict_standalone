import { Component } from '@angular/core';
import { BarModule } from '../bar/bar.module';

@Component({
  selector: 'foo',
  template: `<bar [message]="'hello from foo'">`,
  imports: [BarModule],
})
export class FooComponent {}
