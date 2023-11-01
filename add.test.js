const { expect } = require("chai");
const add = require("./add.js");

describe("Add Function", () => {
  it("should return the sum of two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });

  it("should return the sum of negative numbers", () => {
    expect(add(-2, -3)).to.equal(-5);
  });

  it("should return zero when one of the numbers is zero", () => {
    expect(add(4, 0)).to.equal(4);
    expect(add(0, 5)).to.equal(5);
    expect(add(0, 0)).to.equal(0);
  });
});
