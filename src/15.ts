// A simple calculator with basic arithmetic operations
class Calculator {
  private value = 0;

  public add(num: number): void {
    this.value += num;
  }

  public subtract(num: number): void {
    this.value -= num;
  }

  public multiply(num: number): void {
    this.value *= num;
  }

  public divide(num: number): void {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }

    this.value /= num;
  }

  public getValue(): number {
    return this.value;
  }
}
