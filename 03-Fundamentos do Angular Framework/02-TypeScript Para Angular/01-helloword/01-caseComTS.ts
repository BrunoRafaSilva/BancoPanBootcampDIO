type Hero = {
  nome: string;
  vulgo: string;
  telefone: string;
};

function ligarPara(heroi: Hero) {
  console.log("Ligando para :" + heroi.telefone);
}

ligarPara({
    nome: "Bruno",
    vulgo: "Gigante",
    telefone: "11 4002-8922"
});
