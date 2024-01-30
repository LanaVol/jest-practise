const validateValue = require("./validateValue");

test("Validation values", () => {
  expect(validateValue(50)).toBe(true);
});
