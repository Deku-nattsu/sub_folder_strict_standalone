import { Component, input } from '@angular/core';

@Component({
  selector: 'bar',
  standalone: false,
  template: `bar works {{message()}}`,
})
export class BarComponent {
  message = input('');
}
