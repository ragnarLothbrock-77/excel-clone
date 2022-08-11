class Dom {
  constructor(selector) {
    this.$element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  get data() {
    return this.$element.dataset
  }

  html(html) {
    if (typeof html === 'string') {
      this.$element.innerHTML = html
      return this
    }
    return this.$element.outerHTML.trim()
  }

  text(text) {
    if (typeof text === 'string') {
      this.$element.textContent = text
      return this
    }

    if (this.$element.tagName.toLowerCase() === 'input') {
      return this.$element.value.trim()
    }

    return this.$element.textContent.trim()
  }

  clear() {
    this.html('')
    return this
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$element
    }

    if (Element.prototype.append) {
      this.$element.append(node)
    } else {
      this.$element.appendChild(node)
    }

    return this
  }

  closest(selector) {
    return $(this.$element.closest(selector))
  }

  getCoords() {
    return this.$element.getBoundingClientRect()
  }

  on(eventType, callback) {
    this.$element.addEventListener(eventType, callback)
  }

  remove(eventType, callback) {
    this.$element.removeEventListener(eventType, callback)
  }

  find(selector) {
    return $(this.$element.querySelector(selector))
  }

  findAll(selector) {
    return this.$element.querySelectorAll(selector)
  }

  focus() {
    this.$element.focus()
    return this
  }

  addClass(className) {
    return this.$element.classList.add(className)
  }

  removeClass(className) {
    return this.$element.classList.remove(className)
  }

  css(styles = {}) {
    Object.keys(styles).forEach(item => this.$element.style[item] = styles[item])
  }

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':')
      return {
        row: +parsed[0],
        col: +parsed[1]
      }
    }
    return this.data.id
  }
}


export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const elem = document.createElement(tagName)
  if (classes) {
    elem.classList.add(classes)
  }

  return $(elem)
}