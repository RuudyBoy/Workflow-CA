import {getDiscountPercentage} from "./question-3.js"
import {formatDecimalSpaces} from "./question-3.js"
import {convertKrone} from "./question-3.js"
import {calculateTax} from "./question-3.js"

// getDiscountPercentage

describe('discount', () => { 
  it("calculates", () => {
    expect(getDiscountPercentage(100, 75 )).toBe(25);
  }); 
});


// formatDecimalSpaces

describe('converts', () => { 
  it("calculates", () => {
    expect(formatDecimalSpaces(2)).toBe(2);
  }); 
});

// convertKrone

describe('converts', () => { 
  it("mult", () => {
    expect(convertKrone(10, true )).toBe(101.8);
  }); 

  // calculateTax

  it("divide", () => {
    expect(calculateTax(100)).toBe(125);
  }); 
});






