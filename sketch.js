let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color("black"));
  textAlign(CENTER, CENTER);
  textSize(28);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (gostaDeFantasia && !gostaDeAventura ){
   
  if (idade < 13) {
        return "Recomendamos assiatir 'Moana'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'A ilha da fantasia'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'O Labirinto do Fauno'.";
    } else {
        return "Recomendamos assistir 'Encanto'.";
    } }
   
     else if (gostaDeAventura && !gostaDeFantasia) {
       
       if (idade < 13) {
        return "Recomendamos assistir 'Jumanji: Bem-vindo à Selva'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'RRR'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'O Vingador do Futuro'.";
    } else {
        return "Recomendamos assistir 'Paddington'.";
    } }
 
  else if (gostaDeAventura && gostaDeFantasia) {
       
       if (idade < 13) {
        return "Recomendamos assistir 'MIB - Homens de Preto'."; 
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'Excalibur'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'A Violência do Além'.";
    } else {
        return "Recomendamos assistir 'O Lar das Crianças Peculiares'.";
    } }
 
  else  {
       
       if (idade < 13) {
        return "Recomendamos assistir 'Ponyo'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'Harry Potter'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'A Casa de Cera'.";
    } else {
        return "Recomendamos assistir 'Wonka'.";
    } }
   
    }
