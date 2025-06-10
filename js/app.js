document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nomeUsuario").value.trim();
  const habilidade = document.getElementById("habilidade").value;
  const arma = document.getElementById("arma").value;
  const planeta = document.getElementById("planeta").value;
  const lado = document.getElementById("lado").value;

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
  document.getElementById("resultado").innerHTML = `
    <p>${saudacao}Você se parece com <strong>${personagem}</strong>!</p>
  `;
});
