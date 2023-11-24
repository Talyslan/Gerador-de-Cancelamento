const escreverTela = document.querySelectorAll('p')[0];
const botaoHtml = document.querySelector('button');
const nome = document.querySelector('input#nome');

let texto = ['ser vivo e ter twitter.', 'gostar de música pop.', 'ser baixo demais.', 'ser programador.', 'odiar carecas.', 'ser pobre.', 'ser frango.', 'odiar cachorros.', 'gostar de gatos.', 'criticar a base da Virgínia.', 'colocar o feijão por cima do arroz.', 'ser gado.', 'Por jogar venge.io na hora da aula.', 'procrastinar demais.', 'ser estável financeiramente.', 'ser inútil.', 'ser boy lixo.', 'por ser um grande.', 'por ser impaciente demais'];

const botao = () => {
  const indiceRandom = parseInt(Math.random() * texto.length);
  const textoRandom = texto[indiceRandom];
  const nome_user = nome.value;

  if (nome.value == '' || !isNaN(nome_user))
    escreverTela.innerHTML = `Erro! Preencha com um nome válido!`;
  else
    escreverTela.innerHTML = `${nome_user} foi cancelado(a) por ${textoRandom}`
}

botaoHtml.addEventListener("click", botao);