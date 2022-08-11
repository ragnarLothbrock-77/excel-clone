export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  // Уведомляем слушателя если он есть
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }

    this.listeners[event].forEach(listener => {
      listener(...args)
    });

    return true
  }

  // on, listen
  // Подписываемся на уведомление
  // Добавляем нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)

    return () => this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
  }
}


// Example
// const emitter = new Emitter()
// const unsub = emitter.subscribe('Sam', data => console.log('Sam:', data))
// emitter.emit('121212', 42)

// setTimeout(() => {
//   emitter.emit('Sam', 'After 2 seconds')
// }, 2000);

// setTimeout(() => {
//   unsub()
// }, 3000);

// setTimeout(() => {
//   emitter.emit('Sam', 'After 4 seconds')
// }, 4000);