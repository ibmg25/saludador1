import KBot from "./kbot.js";

describe("Saludador", () => {
    it("Saludar a Juan", () => {
        let kbot = new KBot();
        let resultado = kbot.saludar("Juan") 
        expect(resultado).toEqual("Buenas noches Juan");
    });
  });