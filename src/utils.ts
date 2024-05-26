export type ArabicRoman = [number, string];

const arabicRoman = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [100, "C"],
    [50, "L"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
] satisfies ArabicRoman[];

export const romanize = (num: number) => {
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

export const arabicize = (num: string) => {
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
