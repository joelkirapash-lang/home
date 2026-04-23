const { getPosts } = require("../index.js");
const assert = require("assert");

describe("getPosts", function () {
  it("should return an array of posts", async function () {
    const posts = await getPosts();

    assert(Array.isArray(posts));
    assert(posts.length > 0);
    assert(posts[0].title !== undefined);
    assert(posts[0].body !== undefined);
  });
});
