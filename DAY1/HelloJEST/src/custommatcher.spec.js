expect.extend({
  toBeWithinARange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `${received} is within range ${floor} and ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `${received} is not within range ${floor} and ${ceiling}`,
        pass: false,
      };
    }
  },
});

test("test for custom matcher", () => {
  expect(10).toBeWithinARange(20, 60);
});
