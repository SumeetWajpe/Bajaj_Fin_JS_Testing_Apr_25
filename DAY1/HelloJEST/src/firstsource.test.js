const Add = require("./firstsource"); // common js
xdescribe("", () => {
  it("should test addition of two numbers", () => {
    // Arrange
    let result;
    // Act
    result = Add(10, 20);
    // Assert
    expect(result).toBe(30);
  });
  
});
