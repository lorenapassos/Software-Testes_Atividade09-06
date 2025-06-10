function exibirResultado(titulo, resultado) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${titulo}:</strong> ${resultado}`;
  document.getElementById("testes-resultados").appendChild(div);
}

document.getElementById("rodarTestesUnitBtn").addEventListener("click", () => {
  document.getElementById("testes-resultados").innerHTML = "";
  executarTestesUnitarios();
});

document.getElementById("rodarTestesComponentBtn").addEventListener("click", () => {
  document.getElementById("testes-resultados").innerHTML = "";
  executarTestesDeComponentes();
});
