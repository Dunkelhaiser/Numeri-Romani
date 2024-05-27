import { it, expect, describe } from "vitest";
import {
    arabicize,
    arabicizeSafe,
    isValidArabic,
    isValidArabicSafe,
    isValidRoman,
    isValidRomanSafe,
    romanize,
    romanizeSafe,
    type ArabicRoman,
} from "./utils";

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
        [40, "XL"],
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

        it("returns empty string for invalid numbers", () => {
            const result = romanizeSafe(0);
            expect(result).toBe("");
        });
    });

    describe("converts roman numbers to arabic", () => {
        it.each(tests)("returns right arabic number", (arabicNum, romanNum) => {
            const result = arabicize(romanNum);
            expect(result).toBe(arabicNum);
        });

        it("returns NaN for invalid numbers", () => {
            const result = arabicizeSafe("IIII");
            expect(result).toBe(NaN);
        });
    });

    describe("checks if string is valid roman number", () => {
        const validInvalid: [string, boolean][] = [
            ["X", true],
            ["VII", true],
            ["MMMCMXCIX", true],
            ["IIII", false],
            ["efs", false],
            ["XXIXX", false],
        ];
        it.each(validInvalid)("returns correct validity boolean", (numString, valid) => {
            const result = isValidRomanSafe(numString);
            expect(result).toBe(valid);
        });

        it("throws error for invalid roman number", () => {
            const invalidRoman = "IIII";
            expect(() => isValidRoman(invalidRoman)).toThrow("Invalid roman number");
        });
    });

    describe("checks if number can be converted to roman number", () => {
        const validInvalid: [number, boolean][] = [
            [5, true],
            [3999, true],
            [0, false],
            [4000, false],
            [-1, false],
        ];
        it.each(validInvalid)("returns correct validity boolean", (numString, valid) => {
            const result = isValidArabicSafe(numString);
            expect(result).toBe(valid);
        });

        it("throws error for non-integer numbers", () => {
            expect(() => isValidArabic(1.5)).toThrow("Cannot convert non-integer number");
        });

        it("throws error for zero", () => {
            expect(() => isValidArabic(0)).toThrow("Cannot convert zero");
        });

        it("throws error for negative numbers", () => {
            expect(() => isValidArabic(-1)).toThrow("Cannot convert negative numbers");
        });

        it("throws error for numbers larger than 3999", () => {
            expect(() => isValidArabic(4000)).toThrow("Cannot convert numbers greater than 3999");
        });
    });
});
