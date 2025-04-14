describe("test suite for using different matchers", () => {
  it("test for toBe matcher (===)", () => {
    expect("60").toBe(60);
  });

  it("tests for toEqual to match two objects (=== + object inspection)", () => {
    expect({ name: "John" }).toEqual({ name: "John" });
  });

  it("test for toContain matcher", () => {
    expect("Good Day !").toContain("Day");
    // expect([1, 2, 3, 4]).toContain(6);
  });

  it("test for toMatch", () => {
    expect("Javascript library").toMatch(/javascript/i);
  });
  it("test for toCloseTo", () => {
    expect(3).toBeCloseTo(2.9999999);
  });
  fit("test for toNothing", () => {
    expect(3).toBeCloseTo(2.9999999);
  });
});
