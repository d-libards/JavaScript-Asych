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

function createPost(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      post.push(newPost);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "post Three", body: "this is post Three" })
//   .then(getPosts)
//   .catch((err) => console.error(err));

//Asych / Await

// async function init() {
//   await createPost({ title: "post Three", body: "this is post Three" });

//   getPosts();
// }

// init();

const asyncData = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};
asyncData();

//Promise.all

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
