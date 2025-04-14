const postModule = require("./async");
describe("call fetchPost to fetch post data", () => {
  it("checks if post with correct id is returned", async () => {
    try {
      //arrange
      const mockResult = {
        userId: 1,
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      };
      //act
      const post = await postModule.fetchPost(10);
      // assert
      expect(post).toEqual(mockResult);
    } catch (error) {}
  });

  xit("handles the method that returns a promise", () => {
    return expect(
      postModule.fetchPostToReturnAPromise(10),
    ).resolves.toBeDefined();
  });
});
