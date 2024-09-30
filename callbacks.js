const post = [
  { title: "post One", body: "this is post One" },
  { title: "post Two", body: "this is post Two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    post.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(newPost, callback) {
  setTimeout(() => {
    post.push(newPost);
    callback();
  }, 2000);
}

createPost({ title: "post Three", body: "this is post Three" }, getPosts);
