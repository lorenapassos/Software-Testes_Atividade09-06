function calcularPersonagem(habilidade, arma, forca, estrategia) {
  if (!habilidade && !arma && !forca && !estrategia) {
    throw new Error("Parâmetros inválidos");
  }

  if (habilidade === "sabedoria" && arma === "sabreluz") {
    return "Yoda";
  }

  if (habilidade === "coragem" && arma === "blaster") {
    return "Han Solo";
  }

  if (forca === "força" && estrategia === "liderança") {
    return "Leia Organa";
  }

  if (habilidade === "liderança" && arma === "sabreluz") {
    return "Luke Skywalker";
  }

  return "Personagem desconhecido";
}

function testar(descricao, fn) {
  try {
    fn();
    console.log(`✅ ${descricao}`);
  } catch (error) {
    console.error(`❌ ${descricao}`);
    console.error("  " + error.message);
  }
}

function rodarTestesUnitarios() {
  testar("Retorna Yoda com sabedoria e sabre de luz", () => {
    const resultado = calcularPersonagem("sabedoria", "sabreluz");
    if (resultado !== "Yoda") throw new Error(`Esperado Yoda, mas recebeu ${resultado}`);
  });

  testar("Retorna Han Solo com coragem e blaster", () => {
    const resultado = calcularPersonagem("coragem", "blaster");
    if (resultado !== "Han Solo") throw new Error(`Esperado Han Solo, mas recebeu ${resultado}`);
  });

  testar("Retorna Leia Organa com força e estratégia", () => {
    const resultado = calcularPersonagem(null, null, "força", "liderança");
    if (resultado !== "Leia Organa") throw new Error(`Esperado Leia Organa, mas recebeu ${resultado}`);
  });

  testar("Retorna Luke Skywalker com liderança e sabre de luz", () => {
    const resultado = calcularPersonagem("liderança", "sabreluz");
    if (resultado !== "Luke Skywalker") throw new Error(`Esperado Luke Skywalker, mas recebeu ${resultado}`);
  });

  testar("Erro para parâmetros inválidos (todos vazios)", () => {
    let erroLançado = false;
    try {
      calcularPersonagem(null, null, null, null);
    } catch (e) {
      erroLançado = true;
    }
    if (!erroLançado) throw new Error("Esperava erro para parâmetros inválidos");
  });

  testar("Retorna personagem desconhecido para combinação não mapeada", () => {
    const resultado = calcularPersonagem("sabedoria", "blaster");
    if (resultado !== "Personagem desconhecido") throw new Error(`Esperado Personagem desconhecido, mas recebeu ${resultado}`);
  });
}
