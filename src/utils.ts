export type ArabicRoman = [number, string];

const arabicRoman: ArabicRoman[] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
];

/**
 * List of roman numerals.
 */

export const romanNumerals = ["I", "IV", "V", "IX", "X", "L", "XC", "C", "CD", "D", "CM", "M"];

/**
 * Converts an arabic number to a roman number.
 *
 * @param num The integer arabic number to convert.
 * @throws Error if the number is not an integer, is negative, or is larger than 3999.
 * @returns The roman number.
 */

export const romanize = (num: number) => {
    if (!Number.isInteger(num)) throw new Error("Cannot convert non-integer number");
    if (num === 0) throw new Error("Cannot convert zero");
    if (num < 1) throw new Error("Cannot convert negative numbers");
    if (num > 3999) throw new Error("Cannot convert numbers greater than 3999");

    let arabicNum = num;
    let romanNum = "";

    arabicRoman.forEach(([arabic, roman]) => {
        while (arabicNum >= arabic) {
            romanNum += roman;
            arabicNum -= arabic;
        }
    });

    return romanNum;
};

/**
 * Converts a roman number to an arabic number.
 *
 * @param num The roman number to convert.
 * @throws Error if the roman number is invalid.
 * @returns The arabic number.
 */

export const arabicize = (num: string) => {
    if (!isValidRoman(num)) throw new Error("Invalid roman number");

    let romanNum = num;
    let arabicNum = 0;

    arabicRoman.forEach(([arabic, roman]) => {
        while (romanNum.startsWith(roman)) {
            arabicNum += arabic;
            romanNum = romanNum.slice(roman.length);
        }
    });

    return arabicNum;
};

/**
 * Checks if a string is a valid roman number.
 *
 * @param num The string to check.
 * @returns true or false depending if a string is a valid roman number.
 */

export const isValidRoman = (num: string) => {
    return /^\bM{0,3}(?<temp1>CM|CD|D?C{0,3})(?<temp2>XC|XL|L?X{0,3})(?<temp3>IX|IV|V?I{0,3})\b$/.test(num);
};
