import { arabicize, romanize } from "./utils";

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
}
