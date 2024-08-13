import { Counter } from "@/classes/Counter";

describe("Counter class", () => {
  test("should initialize with default count of 0", () => {
    const counter = new Counter();
    expect(counter.getCount()).toBe(0);
  });
  test("should initialize with specified count", () => {
    const counter = new Counter(10);
    expect(counter.getCount()).toBe(10);
  });
  test("should increment the count", () => {
    const counter = new Counter();
    counter.increment()
    expect(counter.getCount()).toBe(1);
  });
});
