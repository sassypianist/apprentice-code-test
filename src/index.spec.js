import { assert, expect } from "chai";
import {
  add,
  subtract,
  divide,
  multiply,
  areSameLength,
  areEqual,
  isEven,
  isOdd,
  roundNumber
} from "./index";

describe("Math Functions", () => {
  describe("add", () => {
    //The following tests all pass great!
    it("should be a function", () => {
      assert.isFunction(add, "add is a function");
    });
    it("should return a number", () => {
      assert.isNumber(add(2, 3), "add(x, y) returns a number");
    });
    it("should properly add two numbers", () => {
      assert.equal(add(2, 3), 5, "add function works as expected");
    });
  });

  describe("subtract", () => {
    it("should be a function", () => {
      assert.isFunction(subtract, "subtract is a function");
    });
    it("should return a number", () => {
      assert.isNumber(subtract(10, 3), "subtract(x, y) returns a number");
    });
    it("should properly subtract two numbers", () => {
      assert.equal(subtract(3, 2), 1, "subtract function works as expected");
    });
  });

  describe("divide", () => {
    it("should be a function", () => {
      assert.isFunction(divide, "divide is a function");
    });
    it("should return a number", () => {
      assert.isNumber(divide(8, 4), "divide(x, y) returns a number");
    });
    it("should return Infinity if we divide by 0", () => {
      expect(divide(5, 0)).to.equal(Infinity);
    });
  });

  describe("multiply", () => {
    it("should be a function", () => {
      assert.isFunction(multiply, "multiply is a function");
    });
    it("should return a number", () => {
      assert.isNumber(multiply(7, 2), "multiply(x, y) returns a number");
    });
    it("should properly multiply two numbers", () => {
      assert.equal(multiply(3, 4), 12, "multiply function works as expected");
    });
  });

  describe("areSameLength", () => {
    it("should be a function", () => {
      assert.isFunction(areSameLength, "areSameLength is a function");
    });
    it("should return a boolean", () => {
      assert.isBoolean(areSameLength("hello", "world"), "areSameLength returns a boolean");
    });
    it("should return true if both strings are the same length", () => {
      assert.isTrue(areSameLength("hello", "world"));
    });
    it("should return false if two strings have different lengths", () => {
      assert.isFalse(areSameLength("hello", "goodbye"));
    });
  });

  describe("areEqual", () => {
    it("should be a function", () => {
      assert.isFunction(areEqual, "areEqual is a function");
    });
    it("should return a boolean", () => {
      assert.isBoolean(areEqual("hello", "world"), "areEqual returns a boolean");
    });
    it("should return true if both numbers are the same", () => {
      assert.isTrue(areEqual(2, 2));
    });
    it("should return false if the numbers are different", () => {
      assert.isFalse(areEqual(1, 2));
    });
  });

  describe("isEven", () => {
    it("should be a function", () => {
      assert.isFunction(isEven, "isEven is a function");
    });
    it("should return a boolean", () => {
      assert.isBoolean(isEven(6), "isEven returns a boolean");
    });
    it("should return true if number is even", () => {
      assert.isTrue(isEven(4));
    });
    it("should return false if the number is odd", () => {
      assert.isFalse(isEven(7));
    });
  });

  describe("isOdd", () => {
    it("should be a function", () => {
      assert.isFunction(isOdd, "isOdd is a function");
    });
    it("should return a boolean", () => {
      assert.isBoolean(isOdd(7), "isOdd returns a Boolean");
    });
    it("should return true if number is odd", () => {
      assert.isTrue(isOdd(9));
    });
    it("should return false if the number is even", () => {
      assert.isFalse(isOdd(4));
    });
  });

  describe("roundNumber", () => {
    it("should be a function", () => {
      assert.isFunction(roundNumber, "roundNumber is a function");
    });
    it("should return a number", () => {
      assert.isNumber(roundNumber(3.9), "roundNumber returns a number");
    });
    it("should round up when needed", () => {
      assert.equal(roundNumber(1.7), 2);
    });
    it("should round down when needed", () => {
      assert.equal(roundNumber(1.3), 1);
    });
  });
});