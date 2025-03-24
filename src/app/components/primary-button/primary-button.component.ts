import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="hover:opacity-70 w-full  rounded-lg shadow-md px-5 py-1 bg-amber-500 tex-white " (click)="btnClicked.emit();">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output()
  
}
