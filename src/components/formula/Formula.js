import {ExcelComponent} from 'Core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }
  static className = 'excel__formula'

  toHTML() {
    return `
      <div class="logo">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>`
  }

  onInput(event) {
    console.log('Formula onInput', event);
  }

  onClick(event) {
    console.log('Formula onClick', event);
  }
}