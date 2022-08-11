import {DomListener} from 'Core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []
    this.prepare()
  }

  // Settings components before init
  prepare() {}

  // Return component template
  toHTML() {
    return ''
  }

  // Component initialization
  // Add listeners
  init() {
    this.initDOMListeners()
  }

  // Component removing
  // Clean listeners
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }

  // Notificate listenrs about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Subscribe to event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }
}