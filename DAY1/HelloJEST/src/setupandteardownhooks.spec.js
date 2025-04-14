beforeEach(() => {
  console.log("Before Each - 1");
});
// beforeAll(() => {
//   console.log("Before All - 1");
// });
// afterEach(() => {
//   console.log("After Each - 1");
// });
// afterAll(() => {
//   console.log("After All - 1");
// });
xdescribe("a suite for using setip & teardown hooks", () => {
  let cars;
  it("checks if BMW is contained in an array", () => {
    expect(cars).toContain("BMW");
  });
  it("checks if MERC is contained in an array", () => {
    expect(cars).toContain("MERC");
  });
  beforeEach(() => {
    console.log("Before Each - 2");
    cars = ["AUDI", "MERC", "BMW"]; // set up
  });
  // beforeAll(() => {
  //   console.log("Before All - 2");
  //   cars = ["AUDI", "MERC", "BMW"]; // set up
  // });
  // afterEach(() => {
  //   console.log("After Each - 2");
  //   cars = null; // teardown
  // });
  // afterAll(() => {
  //   console.log("After All - 2");
  //   cars = null; // teardown
  // });
});

xdescribe("sample test", () => {
  it("sample test", () => {
    expect(true).toBe(true);
  });
});
