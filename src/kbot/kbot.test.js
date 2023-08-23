import KBot from "./kbot.js";

describe("Saludador", () => {
    it("Saludar a Juan en el dia", () => {
        let kbot = new KBot();
        let resultado = kbot.saludar("Juan", 9) 
        expect(resultado).toEqual("Buenos dias Juan");
    });

    it("Saludar a Juan en la tarde", () => {
        let kbot = new KBot();
        let resultado = kbot.saludar("Juan", 16) 
        expect(resultado).toEqual("Buenas tardes Juan");
    });

    it("Saludar a Juan en la noche", () => {
        let kbot = new KBot();
        let resultado = kbot.saludar("Juan", 21) 
        expect(resultado).toEqual("Buenas noches Juan");
    });
  });