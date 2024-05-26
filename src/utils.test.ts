import { it, expect, describe } from "vitest";
import { arabicize, romanize, type ArabicRoman } from "./utils";

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
        [100, "C"],
        [379, "CCCLXXIX"],
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
    });

    describe("converts roman numbers to arabic", () => {
        it.each(tests)("returns right arabic number", (arabicNum, romanNum) => {
            const result = arabicize(romanNum);
            expect(result).toBe(arabicNum);
        });
    });
});
