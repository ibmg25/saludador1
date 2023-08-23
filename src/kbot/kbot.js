export class KBot {  
    saludar(nombre, hora) {
      let saludo = "";
  
      if (hora >= 0 && hora < 12) {
        saludo = "Buenos días ";
      } else if (hora >= 12 && hora < 19) {
        saludo = "Buenas tardes ";
      } else {
        saludo = "Buenas noches ";
      }
      saludo += nombre;
      console.log(nombre);
      return saludo;
    }
  }
  
  export default KBot;