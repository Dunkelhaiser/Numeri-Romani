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

    private checkResult(value: number) {
        if (value > 3999) {
            throw new Error("The result of the operation exceeds 3999");
        }
        if (value < 1) {
            throw new Error("The result of the operation is less than 1");
        }
    }

    private calculateResult(value: number | string, operation: "add" | "subtract" | "multiply" | "divide") {
        let tempRes: number;
        let numericValue: number;

        if (typeof value === "number") {
            if (!Number.isInteger(value)) throw new Error("The value must be an integer");
            numericValue = value;
        } else {
            isValidRoman(value);
            numericValue = arabicize(value);
        }

        if (operation === "add") {
            tempRes = this.numericValue + numericValue;
        } else if (operation === "subtract") {
            tempRes = this.numericValue - numericValue;
        } else if (operation === "multiply") {
            tempRes = this.numericValue * numericValue;
        } else {
            tempRes = this.numericValue / numericValue;
            if (tempRes % 1 !== 0) throw new Error("The result of the operation is not an integer");
        }

        this.checkResult(tempRes);

        this.setValue(tempRes);
    }

    /**
     * Adds a value to the RomanNumber instance.
     * @param value The value to add. Can be either a arabic number or a roman numeral string.
     */

    public add(value: number | string) {
        this.calculateResult(value, "add");
        return this;
    }

    /**
     * Subtracts a value from the RomanNumber instance.
     * @param value The value to subtract. Can be either a arabic number or a roman numeral string.
     */

    public subtract(value: number | string) {
        this.calculateResult(value, "subtract");
        return this;
    }

    /**
     * Multiplies a value from the RomanNumber instance.
     * @param value The value to multiply. Can be either a arabic number or a roman numeral string.
     */

    public multiply(value: number | string) {
        this.calculateResult(value, "multiply");
        return this;
    }

    /**
     * Divides a value from the RomanNumber instance.
     * @param value The value to divide. Can be either a arabic number or a roman numeral string.
     */

    public divide(value: number | string) {
        this.calculateResult(value, "divide");
        return this;
    }
}
