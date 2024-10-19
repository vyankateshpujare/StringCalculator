import { add } from "./stringCalculator";

describe("String Calculator", () => {
    test("Should return zero for an empty string", () => {
        expect(add("").toBe(0));
    })

    test("Should return number for a string contain single number", () => {
        expect(add("1").toBe(1));
    })

    test("Should return addition of numbers for a string  contain multiple number", () => {
        expect(add("1,2").toBe(3));
        expect(add("1,2,3").toBe(6));
    })

    test("Should handle for a string contain newline as delimeter", () => {
        expect(add("1\n2,3").toBe(6));
    })

    test("Should handle for a string contain custom delimeter", () => {
        expect(add("//;\n1;2").toBe(3));
    })

    test("Should throw an error for a string contain negative numbers", () => {
        expect(add("1,-2").toThrow("negative numbers not allowed : -2"));
        expect(add("1,-2,-3").toThrow("negative numbers not allowed : -2,-3"));
    })
})