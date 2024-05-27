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

    describe("add", () => {
        it("adds a roman number to the RomanNumber instance", () => {
            const romanNumber = new RomanNumber(1);
            romanNumber.add("II");
            expect(romanNumber.getNumericValue()).toBe(3);
            expect(romanNumber.getValue()).toBe("III");
        });

        it("adds a arabic number to the RomanNumber instance", () => {
            const romanNumber = new RomanNumber(5);
            romanNumber.add(-2);
            expect(romanNumber.getNumericValue()).toBe(3);
            expect(romanNumber.getValue()).toBe("III");
        });

        it("throws an error if the result is greater than 3999", () => {
            const romanNumber = new RomanNumber(3998);
            expect(() => romanNumber.add(2)).toThrowError("The sum of the two values exceeds 3999");
        });

        it("throws an error if the result is less than 1", () => {
            const romanNumber = new RomanNumber(1);
            expect(() => romanNumber.add(-2)).toThrowError("The sum of the two values is less than 1");
        });
    });

    describe("substract", () => {
        it("substracts a roman number to the RomanNumber instance", () => {
            const romanNumber = new RomanNumber(10);
            romanNumber.subtract("II");
            expect(romanNumber.getNumericValue()).toBe(8);
            expect(romanNumber.getValue()).toBe("VIII");
        });

        it("substracts a arabic number to the RomanNumber instance", () => {
            const romanNumber = new RomanNumber(5);
            romanNumber.subtract(-2);
            expect(romanNumber.getNumericValue()).toBe(7);
            expect(romanNumber.getValue()).toBe("VII");
        });

        it("throws an error if the result is greater than 3999", () => {
            const romanNumber = new RomanNumber(3998);
            expect(() => romanNumber.subtract(-2)).toThrowError("The difference of the two values exceeds 3999");
        });

        it("throws an error if the result is less than 1", () => {
            const romanNumber = new RomanNumber(1);
            expect(() => romanNumber.subtract(2)).toThrowError("The difference of the two values is less than 1");
        });
    });
});
