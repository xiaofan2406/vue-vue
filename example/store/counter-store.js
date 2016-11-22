export default class CounterStore {
  constructor(init = {}) {
    this.count = init.count || 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
