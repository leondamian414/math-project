class MathProject {
    calculateArea(rectangle: { length: number; width: number }) {
        if (!rectangle) throw new Error("Rectangle is required.");
        const area = rectangle.length * rectangle.width;
        console.log(`The area of the rectangle is ${area}`);
    }

    findGreatestCommonDivisor(a: number, b: number): number {
        if (!a || !b) throw new Error("Numbers are required.");
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }
}
