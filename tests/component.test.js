function executarTestesDeComponentes() {
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

  testar("Formulário existe na página", () => {
    const form = document.getElementById("quiz-form");
    if (!form) throw new Error("Formulário não encontrado");
  });

  testar("Select de habilidade possui opções", () => {
    const habilidade = document.getElementById("habilidade");
    if (habilidade.options.length < 2) throw new Error("Poucas opções");
  });

  testar("Botão de submit existe", () => {
    const botao = document.querySelector("button[type='submit']");
    if (!botao) throw new Error("Botão de submit não encontrado");
  });

  testar("Div de resultado está presente", () => {
    const div = document.getElementById("resultado");
    if (!div) throw new Error("Div de resultado não encontrada");
  });
}
