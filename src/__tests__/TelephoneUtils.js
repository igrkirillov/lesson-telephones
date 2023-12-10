import TelephoneUtils from "../TelephoneUtils";

describe("validator module", () => {
  test ("case 1", () => {
    expect(TelephoneUtils.normalize("8 (927) 000-00-00")).toBe("+79270000000");
  });
  test ("case 2", () => {
    expect(TelephoneUtils.normalize("+7 960 000 00 00")).toBe("+79600000000");
  });
  test ("case 3", () => {
    expect(TelephoneUtils.normalize("+86 000 000 0000")).toBe("+860000000000");
  });
});