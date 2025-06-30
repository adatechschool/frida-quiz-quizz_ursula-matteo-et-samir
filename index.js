

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
function showPopup(titreMessage, reponseLudique) {
  const message = `${titreMessage}\n\n${reponseLudique}`;
  document.getElementById("pop-upMessage").innerText = message;
  document.getElementById("pop-up").style.display = "flex";
  document.getElementById("popup-nextbtn").style.display = "block";
}

function closePopup() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("popup-nextbtn").disabled = false;
  document.getElementById("popup-nextbtn").style.display = "none";

}
let timer = 10;
let timeInterval;
function startTimer(duration) {
  let timeLeft = duration;
  const timeDisplay = document.getElementById("quiz-timer");
  timeDisplay.innerText = `Temps restant: ${timeLeft}S`
  timeInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.innerText = `Temps restant: ${timeLeft}S`;
    console.log(timeLeft)
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timeDisplay.innerText = "Temps écoulé !";
      document.querySelectorAll("#quiz-options button").forEach(btn => btn.disabled = true);
      showPopup("Temps écoulé !", "La bonne réponse était : " + questionnaire[currentIndex].options[questionnaire[currentIndex].correct].answer);
    } 
    
  }
    , 1000);
}


let currentIndex = 0;
let score = 0;


function showQuestion(index) {
  const currentQuestion = questionnaire[index];
  const questionDiv = document.getElementById("quiz-questions");
  questionDiv.innerText = currentQuestion.question;
  const optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = ""; // Vide moi les anciennes réponses
  currentQuestion.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.innerText = option.answer;
    btn.onclick = () => {
      const buttons = document.querySelectorAll("#quiz-options button");
      buttons.forEach(btn => btn.disabled = true);
       clearInterval(timeInterval);
      if (i === currentQuestion.correct) {
        showPopup("Bonne réponse !", currentQuestion.reponseLudique);
        score++;
      } else {
        showPopup("Mauvaise réponse !", currentQuestion.reponseLudique);
      }
    };
    optionsDiv.appendChild(btn);
    clearInterval(timeInterval);
    startTimer(10);
  });
}


function nextQuestion() {
  currentIndex++;
  if (currentIndex < questionnaire.length) {
    showQuestion(currentIndex);
  } else {
    // Fin du quiz
    document.getElementById("quiz-questions").innerText = `Quiz terminé ! Ton score est : ${score}/${questionnaire.length}`;
    document.getElementById("quiz-options").innerHTML = "";
    document.getElementById("popup-nextbtn").style.display = "none";
    document.getElementById("next-question").style.display = "inline-block";
  }
}
showQuestion(currentIndex)

document.getElementById("popup-nextbtn").onclick = function () {
  document.getElementById("pop-up").style.display = "none";
  nextQuestion();
};


function replayButton() {
  currentIndex = 0
  score = 0
  showQuestion(currentIndex)
  document.getElementById("popup-nextbtn").style.display = "inline-block";
  document.getElementById("next-question").style.display = "none";
  clearInterval(timeInterval);
}
