class Dom {
  constructor(selector) {
    this.$element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$element.innerHTML = html
      return this
    }
    return this.$element.outerHTML.trim()
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

  on(eventType, callback) {
    this.$element.addEventListener(eventType, callback)
  }

  remove(eventType, callback) {
    this.$element.removeEventListener(eventType, callback)
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