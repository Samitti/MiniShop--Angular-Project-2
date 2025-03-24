import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="hover:opacity-70 w-full  rounded-lg shadow-md px-5 py-1 bg-red-500 text-white " (click)="btnClicked.emit();">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('');

  btnClicked = output()
}
