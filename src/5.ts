import { Math } from 'mathjs';

export function calculate(expression: string): number {
  return Math.eval(expression);
}
