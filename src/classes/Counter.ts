export class Counter {
  private count: number;

  constructor(count: number = 0) {
    this.count = count;
  }

  increment(){
    this.count += 1
  }

  getCount(): number {
    return this.count
  }
}
