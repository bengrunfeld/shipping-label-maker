import React from "react";
import { render } from "@testing-library/react";
import { calcShippingCost } from "./ConfirmForm";

test("Calculates shipping cost correctly", () => {
  const result = calcShippingCost(5, 2);
  expect(result).toEqual(3);
});

test("Calculates shipping cost correctly", () => {
  const result = calcShippingCost(5, 1);
  expect(result).toEqual(2);
});
