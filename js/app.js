import Button from "./button.js";

let myDiv = document.querySelector("#myApp");

let myButton = new Button("Presiona Aqui!");

myDiv.innerHTML = myButton.render();