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

    describe("operations", () => {
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
                expect(() => romanNumber.add(2)).toThrowError("The result of the operation exceeds 3999");
            });

            it("throws an error if the result is less than 1", () => {
                const romanNumber = new RomanNumber(1);
                expect(() => romanNumber.add(-2)).toThrowError("The result of the operation is less than 1");
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
                expect(() => romanNumber.subtract(-2)).toThrowError("The result of the operation exceeds 3999");
            });

            it("throws an error if the result is less than 1", () => {
                const romanNumber = new RomanNumber(1);
                expect(() => romanNumber.subtract(2)).toThrowError("The result of the operation is less than 1");
            });
        });

        describe("multiply", () => {
            it("multiplies a roman number to the RomanNumber instance", () => {
                const romanNumber = new RomanNumber(10);
                romanNumber.multiply("II");
                expect(romanNumber.getNumericValue()).toBe(20);
                expect(romanNumber.getValue()).toBe("XX");
            });

            it("multiplies a arabic number to the RomanNumber instance", () => {
                const romanNumber = new RomanNumber(5);
                romanNumber.multiply(3);
                expect(romanNumber.getNumericValue()).toBe(15);
                expect(romanNumber.getValue()).toBe("XV");
            });

            it("throws an error if the result is greater than 3999", () => {
                const romanNumber = new RomanNumber(3998);
                expect(() => romanNumber.multiply(2)).toThrowError("The result of the operation exceeds 3999");
            });

            it("throws an error if the result is less than 1", () => {
                const romanNumber = new RomanNumber(1);
                expect(() => romanNumber.multiply(-1)).toThrowError("The result of the operation is less than 1");
            });
        });

        describe("division", () => {
            it("divides a roman number to the RomanNumber instance", () => {
                const romanNumber = new RomanNumber(10);
                romanNumber.divide("II");
                expect(romanNumber.getNumericValue()).toBe(5);
                expect(romanNumber.getValue()).toBe("V");
            });

            it("divides a arabic number to the RomanNumber instance", () => {
                const romanNumber = new RomanNumber(6);
                romanNumber.divide(3);
                expect(romanNumber.getNumericValue()).toBe(2);
                expect(romanNumber.getValue()).toBe("II");
            });

            it("throws an error if the result is less than 1", () => {
                const romanNumber = new RomanNumber(1);
                expect(() => romanNumber.divide(-1)).toThrowError("The result of the operation is less than 1");
            });

            it("throws an error if the result is not an integer", () => {
                const romanNumber = new RomanNumber(5);
                expect(() => romanNumber.divide(2)).toThrowError("The result of the operation is not an integer");
            });
        });

        describe("exponentiation", () => {
            it("raises a roman number to the RomanNumber instance", () => {
                const romanNumber = new RomanNumber(10);
                romanNumber.exponentiation("II");
                expect(romanNumber.getNumericValue()).toBe(100);
                expect(romanNumber.getValue()).toBe("C");
            });

            it("raises a arabic number to the RomanNumber instance", () => {
                const romanNumber = new RomanNumber(5);
                romanNumber.exponentiation(3);
                expect(romanNumber.getNumericValue()).toBe(125);
                expect(romanNumber.getValue()).toBe("CXXV");
            });

            it("throws an error if the result is greater than 3999", () => {
                const romanNumber = new RomanNumber(100);
                expect(() => romanNumber.exponentiation(2)).toThrowError("The result of the operation exceeds 3999");
            });

            it("throws an error if the result is not an integer", () => {
                const romanNumber = new RomanNumber(5);
                expect(() => romanNumber.exponentiation(-2)).toThrowError(
                    "The result of the operation is not an integer"
                );
            });
        });

        it("supports method chaining", () => {
            const romanNumber = new RomanNumber(5);
            romanNumber.add(2).subtract(3).multiply(4).divide(8);
            expect(romanNumber.getNumericValue()).toBe(2);
            expect(romanNumber.getValue()).toBe("II");
        });
    });
});
