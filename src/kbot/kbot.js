export class KBot {  
    saludar(nombre, hora, genero, edad, idioma) {
      let saludo = "";
      let saludos = ["Buenos dias ", "Buenas tardes ", "Buenas noches ", "Good morning ", "Good afternoon ", "Good evening "];
      let add = 0;
      if (idioma == "EN")
        add = add+3;
      if (hora >= 0 && hora < 12) 
        saludo = saludos[0+add];
      else if (hora >= 12 && hora < 19) 
        saludo = saludos[1+add];
      else 
        saludo = saludos[2+add];

      if (genero == "F")
        saludo += "Sra. ";
      else if (edad >= 30)
        saludo += "Sr. ";

      saludo += nombre;
      console.log(nombre);
      return saludo;
    }
  }
  
  export default KBot;