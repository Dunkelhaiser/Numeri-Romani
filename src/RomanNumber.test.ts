import { it, expect, describe } from "vitest";
import { RomanNumber } from "./RomanNumber";

describe("RomanNumber class", () => {
    describe("constructor", () => {
        it("creates a new instance of RomanNumber with arabic number", () => {
            const romanNumber = new RomanNumber(1);
            expect(romanNumber).toBeInstanceOf(RomanNumber);
            expect(romanNumber.getNumericValue()).toBe(1);
            expect(romanNumber.getValue()).toBe("I");
        });

        it("creates a new instance of RomanNumber with roman number", () => {
            const romanNumber = new RomanNumber("I");
            expect(romanNumber).toBeInstanceOf(RomanNumber);
            expect(romanNumber.getNumericValue()).toBe(1);
            expect(romanNumber.getValue()).toBe("I");
        });
    });

    it("sets the value of the RomanNumber instance", () => {
        const romanNumber = new RomanNumber(1);
        romanNumber.setValue("II");
        expect(romanNumber.getNumericValue()).toBe(2);
        expect(romanNumber.getValue()).toBe("II");
    });
});
