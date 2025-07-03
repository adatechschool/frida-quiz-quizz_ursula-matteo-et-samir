const questionnairePromos = [


  {
    question: "Quel âge à la personne la plus agé de la promo",
    options: [
      { answer: "43" },
      { answer: "44" },
      { answer: "45" },
      { answer: "46" }],
    correct: 1,//reponse B
    reponseLudique: "Et oui c'est notre bon vieu Tonton",
  },

  {
    question: "Qui est le plus méchant de la promos ?",
    options: [
      { answer: "Vincino" },
      { answer: "Vincetto" },
      { answer: "Vincente" },
      { answer: "Vincent" }],
    correct: 3,//reponse B
    reponseLudique: "Tié est null",
  },

  {
    question: "Qui a le meilleur flow de la promo ?",
    options: [
      { answer: "Nasra" },
      { answer: "Xinzhu" },
      { answer: "Florian" },
      { answer: "Salem" }],
    correct: 0,// reponse B
    reponseLudique: "C'est ma vie wesh",
  },
  {
    question: "Qui est le plus raciste ?",
    options: [
      { answer: "Salem" },
      { answer: "Abdel" },
      { answer: "Samir" },
      { answer: "Les 3" }],
    correct: 3,// reponse c
    reponseLudique: "Eh oui ils ont tous les trois un humour douteux !",
  },
  {

    question: "Qui est le plus beau ? ",
    options: [
      { answer: "Mattéo" },
      { answer: "Mathias" },
      { answer: "Matthieu" },
      { answer: "Martin" }],
    correct: 0,//Reponse D
    reponseLudique: "Mattéo bien entendu, il est tellement beau. Tu as pris son numéro d'ailleurs? N'oublie pas !",
  },
   {

    question: "Qui est la plus relou ?",
    options: [
      { answer: "Meyko" },
      { answer: "Nasra" },
      { answer: "Abdel" },
      { answer: "Guillaume" }],
    correct: 0,//Reponse D
    reponseLudique: "Mattéo bien entendu, il est tellement beau. Tu as pris son numéro d'ailleurs? N'oublie pas !",
  },
   {

    question: "Qui est la plus bosseur",
    options: [
      { answer: "Félix" },
      { answer: "Iris" },
      { answer: "Joséphine" },
      { answer: "Les 4" },
      { answer: "Sophia" }
    ],
    correct: 3 ,//Reponse D
    reponseLudique: "Bien sur bravo à nos 4 travailleurs !",
  },
]


function promos() {
 currentQuiz = questionnairePromos
currentIndex = 0
score=0
document.getElementById('accueil').style.display = "none";
  document.getElementById('rapAfro').style.display = "none";
  document.getElementById('disney').style.display = "none";
  document.getElementById('quiz-container').style.display = "block";
  document.getElementById('progress-text').style.display = "inline-block"
  document.getElementById("progress-container").style.display="inline-block"
   document.getElementById('promos').style.display = "none";

document.body.style.backgroundImage = "linear-gradient(to bottom right, #a2d2ff, #bde0fe, #ffc8dd)"

showQuestion(currentIndex)
  startTimer(time)
}
