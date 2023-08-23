import { KBot } from './kbot.js';

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const form = document.querySelector("#kbot-form");
const div = document.querySelector("#resultado-div");
const horaActual = new Date().getHours();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const kbot = new KBot();
    console.log(horaActual);
    div.innerHTML = "<p>" + kbot.saludar(nombre.value, horaActual, genero, edad, idioma) + "</p>";
  });