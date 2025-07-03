const questionnaire = [


  {
    question: "Quel pays est souvent considéré comme le berceau de l’Afrobeat ?",
    options: [
      { answer: "Ghana" },
      { answer: "Afrique du Sud" },
      { answer: "Nigeria" },
      { answer: "Côte d’Ivoire" }],
    correct: 2,//reponse C
    reponseLudique: "L’Afrobeat est né au Nigeria dans les années 1970 grâce à Fela Kuti, qui a fusionné les rythmes traditionnels africains, le jazz et le funk avec des messages politiques forts.",
  },

  {
    question: "La musique duquel de ces peuples a fortement influencé Fela Kuti dans la création de l’afrobeat ?",
    options: [
      { answer: "Yoruba" },
      { answer: "Massaï" },
      { answer: "Touareg" },
      { answer: "Pygmée" }],
    correct: 0,//reponse A
    reponseLudique: "Fela Kuti, lui-même d’origine yoruba, a puisé dans les rythmes, chants et spiritualités de ce peuple pour bâtir la base rythmique et mélodique de l’Afrobeat.",
  },

  {
    question: "Quel artiste est connu pour avoir popularisé le mélange rap et afrobeat avec des sons comme Afro Trap Part.3 ?",
    options: [
      { answer: "Niska" },
      { answer: "MHD" },
      { answer: "Burna Boy" },
      { answer: "Olamide" }],
    correct: 1,// reponse B
    reponseLudique: " MHD a lancé le style 'Afro Trap', un genre hybride qui a conquis la jeunesse francophone et remis à l’honneur les influences africaines dans le rap.",
  },
  {
    question: "Quel instrument est le plus typique dans les instrus afrobeat ?",
    options: [
      { answer: "A.Guitare électrique" },
      { answer: "B.Balafon" },
      { answer: "C.Percussions / batterie africaine" },
      { answer: "D.Harmonica" }],
    correct: 2,// reponse c
    reponseLudique: "Les percussions sont au cœur de l’Afrobeat : elles créent un rythme hypnotique et puissant qui pousse à danser tout en transmettant un message.",
  },
  {

    question: "Quel artiste a été l’un des premiers à parler de la banlieue dans le rap français dans les années 90 ?",
    options: [
      { answer: "A.IAM" },
      { answer: "B. Kery James" },
      { answer: "C.MC Solaar" },
      { answer: "D. NTM" }],
    correct: 3,//Reponse D
    reponseLudique: "NTM (JoeyStarr et Kool Shen) a été pionnier dans l’expression de la colère des jeunes des quartiers populaires.",
  },
]

function rapAfro() {
  currentQuiz = questionnaire; // Le tableau de questions rap/afro
  currentIndex = 0;
  score = 0;
  document.getElementById("accueil").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion(currentIndex);
  document.getElementById('rapAfro').style.display="none"
   document.getElementById('promos').style.display = "none";
  document.getElementById('disney').style.display="none"
   document.getElementById('progress-text').style.display = "inline-block"
  document.getElementById("progress-container").style.display="inline-block"
  document.body.style.backgroundImage = "linear-gradient(to right, #f4a261, #e76f51, #2a9d8f)";
  document.getElementById('quiz-timer').style.display="inline-block"
    startTimer(time)
}
