

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
      { answer: "Guitare électrique" },
      { answer: "Balafon" },
      { answer: "Percussions / batterie africaine" },
      { answer: "Harmonica" }],
    correct: 2,// reponse c
    reponseLudique: "Les percussions sont au cœur de l’Afrobeat : elles créent un rythme hypnotique et puissant qui pousse à danser tout en transmettant un message.",
  },
  {

    question: "Quel artiste a été l’un des premiers à parler de la banlieue dans le rap français dans les années 90 ?",
    options: [
      { answer: "IAM" },
      { answer: "Kery James" },
      { answer: "MC Solaar" },
      { answer: "NTM" }],
    correct: 3,//Reponse D
    reponseLudique:"NTM (JoeyStarr et Kool Shen) a été pionnier dans l’expression de la colère des jeunes des quartiers populaires.",
  },
]



let currentIndex = 0;
let score = 0;
function showQuestion(index) {
  const currentQuestion = questionnaire[index];
  const questionDiv = document.getElementById("quiz-questions");
  questionDiv.innerText = currentQuestion.question;
  const optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = ""; // Vide moi les anciennes réponses
}

  const buttons = document.querySelectorAll(".answer button");
  const button = button.id
    buttons.addEventListener("click", () => {
        if (button.id === correct) {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }
       button.forEach(button => button.disabled = true);
    });
 document.getElementById("nextbtn").disabled = true;



function nextQuestion() {
  currentIndex++;
  if (currentIndex < questionnaire.length) {
    showQuestion(currentIndex);
  } else {
    // Fin du quiz
    document.getElementById("quiz-questions").innerText = `Quiz terminé ! Ton score est : ${score}/${questionnaire.length}`;
    document.getElementById("quiz-options").innerHTML = "";
    document.getElementById("nextbtn").style.display = "none";
    document.getElementById("nextbtn").addEventListener("click", nextQuestion);

  }
}
showQuestion(currentIndex);
document.getElementById("nextbtn").addEventListener("click", nextQuestion);



function replayButton(){
  currentQuestionIndex=0
  loadQuestion()
  /* document.querySelector('h2').innerHTML = questionnaire[currentQuestionIndex].text
  document.getElementById('reponses1').innerText = questionnaire[currentQuestionIndex].options[0].answer
  document.getElementById('reponses2').innerText = questionnaire[currentQuestionIndex].options[1].answer
  document.getElementById('reponses3').innerText = questionnaire[currentQuestionIndex].options[2].answer
  document.getElementById('reponses4').innerText = questionnaire[currentQuestionIndex].options[3].answer */
   //document.getElementById("replay-button").style.display = "none"
  document.getElementById("next-question").style.display="inline-block"
}
// document.querySelector('h1').innerHTML = questionnaire[3].text 
