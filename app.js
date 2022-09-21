let quiz__data = [
  {
    name: "Which framworks is related to javascript ?",
    a: ".net",
    b: "flask",
    c: "react",
    d: "django",
    ans: "c",
  },
  {
    name: "CSS stands for ?",
    a: "cascading style state",
    b: "cascading style sheet",
    c: "cascading sheet oof style",
    d: "none",
    ans: "b",
  },
  {
    name: "Which is not a programming language ?",
    a: "html",
    b: "python",
    c: "java",
    d: "javascript",
    ans: "a",
  },
  {
    name: "Which is not a framwork ?",
    a: "react",
    b: "javascript",
    c: "angular",
    d: "django",
    ans: "b",
  },
];

let quiz = document.getElementById("quiz__div");
let answer = document.querySelectorAll(".answer");
let question = document.getElementById("quiz");
let a = document.getElementById("a__value");
let b = document.getElementById("b__value");
let c = document.getElementById("c__value");
let d = document.getElementById("d__value");

let btn = document.getElementById("btn");
let count = 0;
let score = 0;
const deselect = () => {
  answer.forEach((element) => {
    element.checked = false;
  });
};
const loadQuiz = () => {
  deselect();
  question.innerHTML = quiz__data[count].name;
  a.innerHTML = quiz__data[count].a;
  b.innerHTML = quiz__data[count].b;
  c.innerHTML = quiz__data[count].c;
  d.innerHTML = quiz__data[count].d;
};

loadQuiz();
const onSubmit = () => {
  let userAns;
  answer.forEach((element) => {
    if (element.checked) {
      userAns = element.id;
    }
  });
  console.log(userAns);
  if (userAns === quiz__data[count].ans) {
    score = score + 1;
  }

  count = count + 1;
  if (count >= quiz__data.length) {
    quiz.innerHTML = `<h1>You have scored ${score}/${quiz__data.length}</h1>`;
  } else loadQuiz();
};
