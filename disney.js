const questionnaireDIsney = [


  {
    question: "Dans Le Roi Lion, que veut dire “Hakuna Matata” ?",
    options: [
      { answer: "Fais ta valise" },
      { answer: "Pas de souci" },
      { answer: "J’ai oublié mes clés" },
      { answer: "On verra ça demain… ou pas" }],
    correct: 1,//reponse B
    reponseLudique: "Hakuna Matata’ est une expression swahilie popularisée par Le Roi Lion, qui signifie ‘pas de souci’ : une vraie leçon de vie pleine de légèreté et de bonne humeur !",
  },

  {
    question: "Quel est le jouet préféré d’Andy dans Toy Story ?",
    options: [
      { answer: "Buzz L’Éclair" },
      { answer: "Woody" },
      { answer: "Lotso" },
      { answer: "Rex" }],
    correct: 1,//reponse B
    reponseLudique: "Le jouet préféré d’Andy dans Toy Story, c’est Woody, le cow-boy au grand cœur : un symbole d’amitié, de loyauté… et de chapeau toujours bien vissé sur la tête !",
  },

  {
    question: "Quel est le plan diabolique de Cruella d’Enfer ?",
    options: [
      { answer: "Créer un élevage de dalmatiens trop mignons" },
      { answer: "Créer un manteau avec des chiots 😱" },
      { answer: "Ouvrir un spa canin" },
      { answer: "Voler les cœurs, littéralement" }],
    correct: 1,// reponse B
    reponseLudique: "Cruella d’Enfer veut fabriquer un manteau en fourrure de chiots dalmatiens, ce qui en fait une antagoniste célèbre pour sa cruauté envers les animaux.",
  },
  {
    question: "Qui vit dans une chaussure géante sous la mer ?",
    options: [
      { answer: "Bob l’Éponge" },
      { answer: "Flipper" },
      { answer: "Ariel la petite sirène" },
      { answer: "Johnny" }],
    correct: 2,// reponse c
    reponseLudique: "Bien qu’elle vive sous la mer, Ariel n’habite pas dans une chaussure géante — cette maison originale appartient plutôt à la famille Souris dans une autre histoire !",
  },
  {

    question: "Que veut dire “ohana” dans Lilo & Stitch ?",
    options: [
      { answer: "C’est le mot magique pour appeler Stitch" },
      { answer: " Une danse de combat" },
      { answer: " Une pizza hawaïenne" },
      { answer: "“Famille” – et famille signifie que personne ne doit être abandonné" }],
    correct: 3,//Reponse D
    reponseLudique: "Dans Lilo & Stitch, “ohana” signifie “famille” en hawaïen, et rappelle que la famille, c’est sacré : personne ne doit jamais être abandonné.",
  },
]


function disney() {
currentQuiz = questionnaireDIsney
currentIndex = 0
score=0
document.getElementById('accueil').style.display = "none";
  document.getElementById('rapAfro').style.display = "none";
  document.getElementById('disney').style.display = "none";
 document.getElementById('promos').style.display = "none";
  document.getElementById('quiz-container').style.display = "block";
  document.getElementById('progress-text').style.display = "inline-block"
  document.getElementById("progress-container").style.display="inline-block"

document.body.style.backgroundImage = "linear-gradient(to bottom right, #a2d2ff, #bde0fe, #ffc8dd)"
document.getElementById('quiz-timer').style.display="inline-block"
showQuestion(currentIndex)
  startTimer(time)



}