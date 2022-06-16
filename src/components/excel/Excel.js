import {$} from 'Core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    this.components = this.components.map(Component => {
      const $innerElem = $.create('div', Component.className)
      const component = new Component($innerElem)
      // DEBUG
      if (component.name) {
        window['c' + component.name] = component
      }
      $innerElem.html(component.toHTML())
      $root.append($innerElem)
      return component
    });

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}