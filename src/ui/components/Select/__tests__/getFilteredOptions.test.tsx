import React from "react";
import { getFilteredOptions } from "../utils";

const stringOptions = [
  { key: "1", value: "1", label: "one", type: "value" },
  { key: "2", value: "2", label: "two", type: "value" },
  { key: "3", value: "3", label: "three", type: "value" },
];

const numberOptions = [
  { key: 1, value: 1, label: "one", type: "value" },
  { key: 2, value: 2, label: "two", type: "value" },
  { key: 3, value: 3, label: "three", type: "value" },
];

const elementOptions = [
  { key: 1, value: 1, label: <p>one</p>, type: "value" },
  { key: 2, value: 2, label: <p>two</p>, type: "value" },
  { key: 3, value: 3, label: <p>three</p>, type: "value" },
];

describe("getFilteredOptions", () => {
  test("should return full options list", () => {
    expect(getFilteredOptions(stringOptions as never, ""))
      .toMatchObject(stringOptions);
    expect(getFilteredOptions(numberOptions as never, ""))
      .toMatchObject(numberOptions);
    expect(getFilteredOptions(elementOptions as never, ""))
      .toMatchObject(elementOptions);
  });

  test("should return empty options", () => {
    expect(getFilteredOptions([], ""))
      .toStrictEqual([{ type: "header", label: "No items(s) found" }]);
  });

  test("should return filtered options", () => {
    expect(getFilteredOptions(stringOptions as never, "", "e"))
      .toMatchObject([
        { key: "1", value: "1", label: "one", type: "value" },
        { key: "3", value: "3", label: "three", type: "value" },
      ]);
  });
});
