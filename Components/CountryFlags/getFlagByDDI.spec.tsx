import React from 'react';
import { getFlagByDDI } from ".";
import { BR } from "./icons";

describe("getFlagByDDI", () => {
  it("should return Brazil flag when input 55 as number", () => {
    expect(
      getFlagByDDI(55)
    ).toStrictEqual(<BR />);
  });

  it("should return Brazil flag when input 55 as string", () => {
    expect(
      getFlagByDDI("55")
    ).toStrictEqual(<BR />);
  });

  it("should throw a new error when input string with special characters", () => {
    expect(
      () => getFlagByDDI("I4ç")
    ).toThrowError();
  });

});