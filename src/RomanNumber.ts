import { arabicize, isValidRoman, romanize } from "./utils";

/**
 * A class representing a roman number.
 */

export class RomanNumber {
    private value: string;
    private numericValue: number;

    /**
     * Creates a new RomanNumber instance.
     * @param value The value of the RomanNumber instance. Can be either a arabic number or a roman numberal string.
     */

    constructor(value: number | string) {
        if (typeof value === "number") {
            this.value = romanize(value);
            this.numericValue = value;
        } else {
            this.numericValue = arabicize(value);
            this.value = value;
        }
    }

    /**
     * @returns The roman numeral value of the RomanNumber instance.
     */

    public getValue() {
        return this.value;
    }

    /**
     * @returns The arabic numeral value of the RomanNumber instance.
     */

    public getNumericValue() {
        return this.numericValue;
    }

    /**
     * Sets the roman number and arabic number values of the RomanNumber instance.
     * @param value The value to set. Can be either a arabic number or a roman numeral string.
     */

    public setValue(value: number | string) {
        if (typeof value === "number") {
            this.value = romanize(value);
            this.numericValue = value;
        } else {
            this.numericValue = arabicize(value);
            this.value = value;
        }
    }

    /**
     * Adds a value to the RomanNumber instance.
     * @param value The value to add. Can be either a arabic number or a roman numeral string.
     */

    public add(value: number | string) {
        if (typeof value === "number") {
            if (!Number.isInteger(value)) throw new Error("The value must be an integer");
            const tempSum = this.numericValue + value;
            if (tempSum > 3999) {
                throw new Error("The sum of the two values exceeds 3999");
            }
            if (tempSum < 1) {
                throw new Error("The sum of the two values is less than 1");
            }

            this.numericValue = tempSum;
            this.value = romanize(tempSum);
        } else {
            isValidRoman(value);
            const tempSum = this.numericValue + arabicize(value);
            if (tempSum > 3999) {
                throw new Error("The sum of the two values exceeds 3999");
            }
            if (tempSum < 1) {
                throw new Error("The sum of the two values is less than 1");
            }

            this.numericValue = tempSum;
            this.value = romanize(tempSum);
        }
    }

    /**
     * Subtracts a value from the RomanNumber instance.
     * @param value The value to subtract. Can be either a arabic number or a roman numeral string.
     */

    public subtract(value: number | string) {
        if (typeof value === "number") {
            if (!Number.isInteger(value)) throw new Error("The value must be an integer");
            const tempDiff = this.numericValue - value;
            if (tempDiff > 3999) {
                throw new Error("The difference of the two values exceeds 3999");
            }
            if (tempDiff < 1) {
                throw new Error("The difference of the two values is less than 1");
            }

            this.numericValue = tempDiff;
            this.value = romanize(tempDiff);
        } else {
            isValidRoman(value);
            const tempDiff = this.numericValue - arabicize(value);
            if (tempDiff > 3999) {
                throw new Error("The difference of the two values exceeds 3999");
            }
            if (tempDiff < 1) {
                throw new Error("The difference of the two values is less than 1");
            }

            this.numericValue = tempDiff;
            this.value = romanize(tempDiff);
        }
    }

    /**
     * Multiplies a value from the RomanNumber instance.
     * @param value The value to multiply. Can be either a arabic number or a roman numeral string.
     */

    public multiply(value: number | string) {
        if (typeof value === "number") {
            if (!Number.isInteger(value)) throw new Error("The value must be an integer");
            const tempDiff = this.numericValue * value;
            if (tempDiff > 3999) {
                throw new Error("The product of the two values exceeds 3999");
            }
            if (tempDiff < 1) {
                throw new Error("The product of the two values is less than 1");
            }

            this.numericValue = tempDiff;
            this.value = romanize(tempDiff);
        } else {
            isValidRoman(value);
            const tempDiff = this.numericValue * arabicize(value);
            if (tempDiff > 3999) {
                throw new Error("The product of the two values exceeds 3999");
            }
            if (tempDiff < 1) {
                throw new Error("The product of the two values is less than 1");
            }

            this.numericValue = tempDiff;
            this.value = romanize(tempDiff);
        }
    }

    /**
     * Divides a value from the RomanNumber instance.
     * @param value The value to divide. Can be either a arabic number or a roman numeral string.
     */

    public divide(value: number | string) {
        if (typeof value === "number") {
            if (!Number.isInteger(value)) throw new Error("The value must be an integer");
            const tempDiff = this.numericValue / value;
            if (tempDiff > 3999) {
                throw new Error("The quotient of the two values exceeds 3999");
            }
            if (tempDiff < 1) {
                throw new Error("The quotient of the two values is less than 1");
            }
            if (tempDiff % 1 !== 0) throw new Error("The quotient of the two values is not an integer");

            this.numericValue = tempDiff;
            this.value = romanize(tempDiff);
        } else {
            isValidRoman(value);
            const tempDiff = this.numericValue / arabicize(value);
            if (tempDiff > 3999) {
                throw new Error("The quotient of the two values exceeds 3999");
            }
            if (tempDiff < 1) {
                throw new Error("The quotient of the two values is less than 1");
            }
            if (tempDiff % 1 !== 0) throw new Error("The quotient of the two values is not an integer");

            this.numericValue = tempDiff;
            this.value = romanize(tempDiff);
        }
    }
}
