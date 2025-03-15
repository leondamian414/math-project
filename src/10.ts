export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Testing code
const min = 1;
const max = 10;
console.log(getRandomNumber(min, max));
