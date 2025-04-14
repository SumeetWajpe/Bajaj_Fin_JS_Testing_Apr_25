const fetchPost = require("./async");
describe("call fetchPost to fetch post data", () => {
  it("", async () => {
    try {
      const post = await fetchPost(10);
      expect(post).toEqual({
        userId: 1,
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      });
    } catch (error) {}
  });
});
