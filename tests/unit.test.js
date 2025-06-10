function executarTestesUnitarios() {
  let passed = 0;
  let failed = 0;

  function testar(nome, fn) {
    try {
      fn();
      exibirResultado(nome, "✅ Passou");
      passed++;
    } catch (erro) {
      exibirResultado(nome, "❌ Falhou: " + erro.message);
      failed++;
    }
  }

  function descobrirPersonagem(lado, arma, planeta, habilidade, nome) {
    let personagem = "um ser misterioso da galáxia...";

    if (habilidade === "sabedoria" && arma === "sabreluz" && lado === "jedi") {
      personagem = "Yoda";
    } else if (habilidade === "liderança" && arma === "sabreluz" && lado === "jedi") {
      personagem = "Luke Skywalker";
    } else if (habilidade === "força" && arma === "sabreluz" && lado === "sith") {
      personagem = "Darth Vader";
    } else if (habilidade === "estrategia" && arma === "blaster" && planeta === "coruscant") {
      personagem = "Leia Organa";
    } else if (habilidade === "coragem" && arma === "blaster" && lado === "neutro") {
      personagem = "Han Solo";
    } else if (habilidade === "sabedoria" && planeta === "dagobah") {
      personagem = "Obi-Wan Kenobi";
    } else if (habilidade === "força" && lado === "sith") {
      personagem = "Palpatine";
    } else {
      personagem = "Grogu (Baby Yoda)";
    }

    const saudacao = nome ? `Olá, ${nome}! ` : "";
    return `${saudacao}Você se parece com ${personagem}!`;
  }

  // Testes que devem passar
  testar("Retorna Yoda com sabedoria, sabreluz e Jedi", () => {
    const res = descobrirPersonagem("jedi", "sabreluz", "tatooine", "sabedoria", "Ahsoka");
    if (!res.includes("Yoda")) throw new Error(`Esperado Yoda, mas retornou: ${res}`);
  });

  testar("Retorna Luke Skywalker com liderança, sabreluz e Jedi", () => {
    const res = descobrirPersonagem("jedi", "sabreluz", "tatooine", "liderança", "Luke");
    if (!res.includes("Luke Skywalker")) throw new Error(`Esperado Luke Skywalker, mas retornou: ${res}`);
  });

  testar("Retorna Darth Vader com força, sabreluz e Sith", () => {
    const res = descobrirPersonagem("sith", "sabreluz", "mustafar", "força", "Anakin");
    if (!res.includes("Darth Vader")) throw new Error(`Esperado Darth Vader, mas retornou: ${res}`);
  });

  testar("Retorna Leia Organa com estratégia, blaster e Coruscant", () => {
    const res = descobrirPersonagem("jedi", "blaster", "coruscant", "estrategia", "Leia");
    if (!res.includes("Leia Organa")) throw new Error(`Esperado Leia Organa, mas retornou: ${res}`);
  });

  testar("Retorna Han Solo com coragem, blaster e Neutro", () => {
    const res = descobrirPersonagem("neutro", "blaster", "falcon", "coragem", "Han");
    if (!res.includes("Han Solo")) throw new Error(`Esperado Han Solo, mas retornou: ${res}`);
  });

  testar("Retorna Obi-Wan Kenobi com sabedoria e Dagobah", () => {
    const res = descobrirPersonagem("neutro", "mente", "dagobah", "sabedoria", "Ben");
    if (!res.includes("Obi-Wan Kenobi")) throw new Error(`Esperado Obi-Wan Kenobi, mas retornou: ${res}`);
  });

  testar("Retorna Palpatine com força e Sith", () => {
    const res = descobrirPersonagem("sith", "mente", "coruscant", "força", "Sheev");
    if (!res.includes("Palpatine")) throw new Error(`Esperado Palpatine, mas retornou: ${res}`);
  });

  testar("Retorna Grogu para combinação desconhecida", () => {
    const res = descobrirPersonagem("neutro", "mente", "alderaan", "inteligência", "Grogu");
    if (!res.includes("Grogu")) throw new Error(`Esperado Grogu, mas retornou: ${res}`);
  });

  testar("Inclui saudação personalizada", () => {
    const res = descobrirPersonagem("jedi", "sabreluz", "tatooine", "sabedoria", "Ahsoka");
    if (!res.startsWith("Olá, Ahsoka!")) throw new Error("Saudação não encontrada");
  });
}
