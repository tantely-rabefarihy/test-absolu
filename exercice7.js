const hello_world = (foo = "ipsum") => {
  const fu = $(`.${foo}`).data("hello");
  return `${foo} : ${fu}`;
};

const test = hello_world("welcome");
console.log(test + " [test]");

const loremIpsum = (dolor = "dolor") => {
  let test = "123456";
  let val = $("[data-" + dolor + "]").data(dolor);
  return `<p>Result [${test}]: ${test * val}</p>`;
};

const myDiv = $("#mine").html(loremIpsum());

myDiv.css("background-color", "cyan");
myDiv.on("click", () => {
  myDiv.children().css("color", "red");
});

let abc = { x: "1", y: "2", z: "3" };
const x = abc.x;
const y = abc.y;
console.log(x == 1 && y >= 2 ? "yeah" : "boo");
