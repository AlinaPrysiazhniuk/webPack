// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

import "./styles/style.css";

import { base, list, frameworks, libs } from "./data/hbsData";
import task1 from "./template/task1.hbs";
import task2 from "./template/task2.hbs";
import task3 from "./template/task3.hbs";
import task4 from "./template/task4.hbs";

const markupFirst = task1(base);

const rootEl = document.querySelector("#root");
rootEl.insertAdjacentHTML("beforeend", markupFirst);

const markupSecond = task2(list);
rootEl.insertAdjacentHTML("beforeend", markupSecond);

const markupThird = task3(frameworks);
rootEl.insertAdjacentHTML("beforeend", markupThird);

const markupFourth = task4(libs);
rootEl.insertAdjacentHTML("beforeend", markupFourth);
