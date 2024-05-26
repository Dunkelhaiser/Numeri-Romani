export class RomanNumber {
    private value: string;
    private numericValue: number;

    constructor(value: number) {
        this.value = String(value);
        this.numericValue = value;
    }
}
