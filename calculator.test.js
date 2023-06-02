const mathOperations = require('./calculator.js');

describe("Calculator tests", () => {
    var input1 = 0;
    var input2 = 0;

    beforeAll(() => {
        console.log("beforeAll called");
    });

    afterAll(() => {
        console.log("afterAll called");
    });

    beforeEach(() => {
        console.log("beforeEach called");
        input1 = 1;
        input2 = 2;
    });

    afterEach(() => {
        console.log("afterEach called");
    });

    test('adding 1 + 2 should return 3', () => {
        var result = mathOperations.sum(input1, input2);
        expect(result).toBe(3);
    });

    test('difference 2 - 1 should return 1', () => {
        var result = mathOperations.diff(input1, input2);
        expect(result).toBe(1);
    });

    test('multiplying 2 and 8 should return 16', () => {
        var result = mathOperations.product(input1, input2);
        expect(result).toBe(16);
    });

    test('truthy operators', () => {
        var name = "Software testing help"
        var n = null
        expect(n).toBeNull;
        expect(name).not.toBeNull;

        expect(name).toBeTruthy();
        expect(n).toBeFalsy();
        expect(0).toBeFalsy();
    });

    test('numeric operators', () => {
        var num1 = 100;
        var num2 = -20;
        var num3 = 0;

        expect(num1).toBeGreaterThan(10);

        expect(num2).toBeLessThan(0);

        expect(num3).toBeLessThanOrEqual(0);
    });

    test('string matchers', () => {
        var string1 = "software testing help - a great resource for testers";

        expect(string1).toMatch(/test/);

        expect(string1).not.toMatch(/abc/);
    })
})