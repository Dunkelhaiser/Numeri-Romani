# Numeri Romani

JavaScript library for work with Roman numbers.

## Features

- TypeScript and JSDoc support
- Conversion between Roman and Arabic numbers
- RomanNumber class
- Ability to perform basic mathematical operations

## Installation

```sh
npm install @dunkelhaiser/numeri-romani
```

```sh
yarn add @dunkelhaiser/numeri-romani
```

```sh
pnpm add @dunkelhaiser/numeri-romani
```

```sh
bun add @dunkelhaiser/numeri-romani
```

## Basic usage

### Importing the Library

#### Using ESM

```ts
import { RomanNumber, romanNumerals, romanize, romanizeSafe, arabicize, arabicizeSafe, isValidRoman, isValidRomanSafe, isValidArabic, isValidArabicSafe } from "@dunkelhaiser/numeri-romani";
```

#### Using CommonJS

```ts
const { RomanNumber, romanNumerals, romanize, romanizeSafe, arabicize, arabicizeSafe, isValidRoman, isValidRomanSafe, isValidArabic, isValidArabicSafe } = require("@dunkelhaiser/numeri-romani");
```

### Number conversion

#### Convert to Roman number

```ts
romanize(379); // => "CCCLXXIX"
```

#### Convert to Arabic number

```ts
arabicize("LIV"); // => 54
```

With the default implementation of these functions, if conversion fails, a corresponding error will be thrown explaining the reason for the failure. Default functions use `isValidRoman` and `isValidArabic`, so errors will be the same as theirs.
If you don't want to handle errors, you can use *safe* implementations of these functions `romanizeSafe` or `arabicizeSafe` which on fail will return "" or NaN correspondingly.

### Validity check

#### Check the validity of the Roman number

To check if a string is a valid Roman number you can use `isValidRoman` or `isValidRomanSafe`.

```ts
isValidRoman("LIV"); // => true
isValidRoman("IIV"); // => Error: Invalid roman number
```

```ts
isValidRomanSafe("LIV"); // => true
isValidRomanSafe("IIV"); // => false
```

#### Check the validity of the Arabic number

To check if an Arabic number can be converted into a Roman number you can use `isValidArabic` or `isValidArabicSafe`.

```ts
isValidArabic("LIV"); // => true
isValidArabic(5.5); // => Error: Cannot convert non-integer number
isValidArabic(0); // => Error: Cannot convert zero
isValidArabic(-2); // => Error: Cannot convert negative numbers
isValidArabic(-4567); // => Error: Cannot convert numbers greater than 3999
```

```ts
isValidArabicSafe(14); // => true
isValidArabicSafe(5.5); // => false
isValidArabicSafe("14"); // => false
```

### RomanNumber class

RomanNumber class provides an ability to create RomanNumber an object that will contain Roman and Arabic numeral values. Also, this object provides arithmetic operations methods.

#### Initialization

```ts
const romanNumber = new RomanNumber(7); // { roman: "VII", arabic: 7 }
const romanNumber = new RomanNumber("VII"); // { roman: "VII, arabic: 7 }
```

##### Get values

```ts
romanNumber.getValue(); // => "VII"
romanNumber.getNumericValue(); // => 7
romanNumber.getValues(); // => { roman: "VII", arabic: 7 }
```

#### Set value

```ts
romanNumber.setValue(9); // { roman: "IX", arabic: 9 }
romanNumber.setValue("IX"); // { roman: "IX", arabic: 9 }
```

#### Arithmetic operations

Arithmetic operations will update Roman and Arabic values of an instantiated object and return it, so it can be reassigned or method chained.

All methods support Arabic and Roman numbers as an argument.
The Roman number must correspond to the `isValidRoman` function. Arabic number can be any integer value.

The results of operations must correspond to the `isValidRoman` function or an error will be thrown.

##### Addition

```ts
romanNumber.add(4).add("IV");
```

##### Subtraction

```ts
romanNumber.substract(4).subtract("IV");
```

##### Multiplication

```ts
romanNumber.multiply(4).multiply("IV");
```

##### Division

```ts
romanNumber.divide(4).divide("IV");
```

## Contributing

### Bug Reporting

If you come across a bug or unexpected behavior, please take the time to report it. To file a bug report:

1. Check if the issue has already been reported by searching the [issues](https://github.com/Dunkelhaiser/Numeri-Romani/issues).
2. If the issue hasn't been reported yet, open a new issue, providing as much detail as possible, including:

- A clear and concise title.
- A detailed description of the issue.
- Steps to reproduce the problem.
- Expected and actual behavior.

### Feature Proposals

To propose a new feature:

1. Check the [issues](https://github.com/Dunkelhaiser/Numeri-Romani/issues) to ensure it hasn't been proposed before.
2. Open a new issue, clearly describing the new feature or enhancement you would like to see.
3. Provide any relevant details or use cases that will help understand the use of the proposed feature.

### Code Contributions

To contribute code:

1. Fork the repository.
2. Create a new branch for your changes with a specific prefix: `git checkout -b feat/your-feature`. Accepted prefixes: feat, fix, refactor, docs.
3. Make your changes, following the coding style.
4. Write unit tests for your changes.
5. Update the README or documentation if necessary.
6. Submit a pull request to the dev branch of the original repository.
7. Provide a detailed description in the pull request, explaining the purpose of your changes.

## License

Copyright (c) 2024 [Kyrylo Tymchyshyn](https://github.com/Dunkelhaiser)  
Licensed under the MIT license.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W7LIYO1)
