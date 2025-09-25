let body = document.body;
let myDiv = document.getElementById("my-div");
let nestedDiv = document.getElementById("nested-div");
let anchor = document.getElementById("w3schools-link");

anchor.addEventListener("click", function (event) {
  event.preventDefault(); // Prevents the default action of the anchor tag
  console.log("Anchor clicked!");
});

// body.addEventListener(
//   "click",
//   function (e) {
//     // e.stopPropagation(); // Prevents the event from bubbling up to parent elements
//     alert("Body clicked!");
//   },
//   true
// );

myDiv.addEventListener(
  "click",
  function (e) {
    // e.stopPropagation(); // Prevents the event from bubbling up to parent elements
    alert("Div clicked!");
  },
  true
);

nestedDiv.addEventListener(
  "click",
  function (event) {
    // event.stopPropagation(); // Prevents the event from bubbling up to parent elements
    alert("Nested Div clicked!");
  },
  true
);

// nestedDiv.addEventListener(
//   "click",
//   function (event) {
//     event.stopPropagation(); // Prevents the event from bubbling up to parent elements
//     alert("Nested Div clicked again!");
//   },
//   true
// );
