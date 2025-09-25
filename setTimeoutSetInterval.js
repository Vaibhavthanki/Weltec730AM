let myVar;

function tryIt() {
  myVar = setTimeout(function () {
    alert("Hello");
  }, 3000);
  console.log("check7", myVar);
}

function stopIt() {
  clearTimeout(myVar);
}

function myInterval() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

let myVar1;
function tryInterval() {
  myVar1 = setInterval(myInterval, 1000);
}

function stopInterval() {
  console.log("check8", myVar1);
  clearInterval(myVar1);
}
