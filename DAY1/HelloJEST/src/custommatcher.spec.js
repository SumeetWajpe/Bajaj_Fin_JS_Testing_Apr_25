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

test.skip(" for custom matcher to be within a range", () => {
  //   expect(10).toBeWithinARange(20, 60); // fails
  expect(10).not.toBeWithinARange(20, 60);

  expect({ noofemp: 1000, worldranking: 3 }).toEqual({
    noofemp: expect.toBeWithinARange(1000, 2000),
    worldranking: expect.toBeWithinARange(1, 3),
  });
});

// write a custom matcher to check if a number is even
// fail the test if the type is not a number
