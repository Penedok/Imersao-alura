var bancoFilmes = [];
var bancoNomeFilmes = [];

function adicionarFilme() {
  var filmeAdicionado = document.getElementById("filme").value;
  var nomeFilmeAdicionado = document.getElementById("nomeFilme").value;

  if (filmeAdicionado.endsWith(".jpg") || filmeAdicionado.endsWith(".png")) {
    bancoFilmes.push(filmeAdicionado);
    bancoNomeFilmes.push(nomeFilmeAdicionado);
    filmeTela();
  } else {
    console.error("imagem invalida");
  }
}
document.getElementById("filme").value = ""; //ficou fora do if pois se caso tiver certo ou errado ele vai limpar o campo.
document.getElementById("nomeFilme").value = "";

function filmeTela() {
  document.getElementById("listaFilmes").innerHTML = "";
  for (var i = 0; i < bancoFilmes.length; i++) {
    document.getElementById("listaFilmes").innerHTML +=
      "<div class='imagem-filmes'><img src=" +
      bancoFilmes[i] +
      "> <p>" +
      bancoNomeFilmes[i] +
      "</p></div";
  }
}

function removerFilme() {
  var filmeRemovido = document.getElementById("remover").value;
  var removerIndice = bancoFilmes.indexOf(filmeRemovido);
  while (removerIndice >= 0) {
    bancoFilmes.splice(removerIndice, 1);
    bancoNomeFilmes.splice(removerIndice, 1);
    removerIndice = bancoFilmes.indexOf(filmeRemovido);
  }

  filmeTela();
}
