import { it, expect, describe } from "vitest";
import { arabicize, isValidRoman, romanize, type ArabicRoman } from "./utils";

describe("roman numbers", () => {
    const tests: ArabicRoman[] = [
        [1, "I"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [6, "VI"],
        [9, "IX"],
        [10, "X"],
        [11, "XI"],
        [15, "XV"],
        [16, "XVI"],
        [20, "XX"],
        [29, "XXIX"],
        [50, "L"],
        [54, "LIV"],
        [90, "XC"],
        [100, "C"],
        [379, "CCCLXXIX"],
        [400, "CD"],
        [500, "D"],
        [984, "CMLXXXIV"],
        [1000, "M"],
        [3999, "MMMCMXCIX"],
    ];

    describe("converts arabic numbers to roman", () => {
        it.each(tests)("returns right roman number", (arabicNum, romanNum) => {
            const result = romanize(arabicNum);
            expect(result).toBe(romanNum);
        });

        it("throws error for non-integer numbers", () => {
            expect(() => romanize(1.5)).toThrow("Cannot convert non-integer number");
        });

        it("throws error for zero", () => {
            expect(() => romanize(0)).toThrow("Cannot convert zero");
        });

        it("throws error for negative numbers", () => {
            expect(() => romanize(-1)).toThrow("Cannot convert negative numbers");
        });

        it("throws error for numbers larger than 3999", () => {
            expect(() => romanize(4000)).toThrow("Cannot convert numbers greater than 3999");
        });
    });

    describe("converts roman numbers to arabic", () => {
        it.each(tests)("returns right arabic number", (arabicNum, romanNum) => {
            const result = arabicize(romanNum);
            expect(result).toBe(arabicNum);
        });

        it("throws error for invalid roman number", () => {
            const invalidRoman = "IIII";
            expect(() => arabicize(invalidRoman)).toThrow("Invalid roman number");
        });
    });

    describe("checks if string is valid roman number", () => {
        const validInvalid = [
            ["X", true],
            ["VII", true],
            ["MMMCMXCIX", true],
            ["IIII", false],
            ["efs", false],
            ["XXIXX", false],
        ] satisfies [string, boolean][];
        it.each(validInvalid)("returns correct validity boolean", (numString, valid) => {
            const result = isValidRoman(numString);
            expect(result).toBe(valid);
        });
    });
});
