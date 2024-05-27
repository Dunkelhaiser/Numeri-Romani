import { it, expect, describe } from "vitest";
import { arabicize, isValidRoman, romanize, type ArabicRoman } from "./utils";

describe("roman numbers", () => {
    const tests = [
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
        [7964, "MMMMMMMCMLXIV"],
    ] satisfies ArabicRoman[];

    describe("converts arabic numbers to roman", () => {
        it.each(tests)("returns right roman number", (arabicNum, romanNum) => {
            const result = romanize(arabicNum);
            expect(result).toBe(romanNum);
        });

        it("throws error for non-integer numbers", () => {
            expect(() => romanize(1.5)).toThrow("Non-integer number");
        });

        it("throws error for zero", () => {
            expect(() => romanize(0)).toThrow("Cannot convert zero");
        });

        it("throws error for negative numbers", () => {
            expect(() => romanize(-1)).toThrow("Cannot convert negative numbers");
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
            ["MMMMMMMCMLXIV", true],
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
