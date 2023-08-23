export class KBot {  
    saludar(nombre, hora, genero) {
      let saludo = "";
  
      if (hora >= 0 && hora < 12) 
        saludo = "Buenos dias ";
      else if (hora >= 12 && hora < 19) 
        saludo = "Buenas tardes ";
      else 
        saludo = "Buenas noches ";

      if (genero == "M")
        saludo += "Sr. ";
      else if (genero == "F")
        saludo += "Sra. ";

      saludo += nombre;
      console.log(nombre);
      return saludo;
    }
  }
  
  export default KBot;