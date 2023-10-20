import React from "react";
import { getDisplayValue } from "../utils";

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

describe("getDisplayValue", () => {
  test("should return value if pass primitive", () => {
    expect(getDisplayValue("2", stringOptions as never)).toEqual("two");
    expect(getDisplayValue(3, numberOptions as never)).toEqual("three");
  });

  test("should return value if pass as array", () => {
    expect(getDisplayValue(["1", "2"], stringOptions as never)).toEqual("one, two");
  });

  test("should return value as array of jsx elements", () => {
    expect(getDisplayValue([1, 2], elementOptions as never))
      .toEqual([<p>one</p>, <p>two</p>]);
  });

  test("should return empty value if no pass options", () => {
    expect(getDisplayValue("1", undefined as never)).toEqual("");
    expect(getDisplayValue(["1", "2"], [])).toEqual("");
  });

  test.each(
    [undefined, null, true, false, {}],
  )("wrong value: %p", (value) => {
    expect(getDisplayValue(value as never, stringOptions as never)).toEqual("");
  });
});
