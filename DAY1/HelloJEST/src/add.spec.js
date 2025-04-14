const Add = require("./add"); // common js

xdescribe("test suite for addition of two entities", () => {
  it("should add two numbers", () => {
    // Arrange
    let result;
    // Act
    result = Add(10, 20);
    // Assert
    expect(result).toBe(30);
  });
  //   it("should test addition of two strings", () => {
  //     // Arrange
  //     let result;
  //     // Act
  //     result = Add("Hello", "JEST");
  //     // Assert
  //     expect(result).toBe("HelloJEST");
  //   });
});

// fdescribe("just another suite", () => {
//   it("sample test", () => {
//     expect(true).toBe(true);
//   });
// });
