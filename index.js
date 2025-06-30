

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

function showPopup(titreMessage, reponseLudique) {
  const message = `${titreMessage}\n\n${reponseLudique}`;
  document.getElementById("pop-upMessage").innerText = message;
  document.getElementById("pop-up").style.display = "flex";
  document.getElementById("popup-nextbtn").style.display="block";
}

function closePopup(){
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("popup-nextbtn").disabled= false;
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
      if (i === currentQuestion.correct) {
      showPopup("Bonne réponse !",currentQuestion.reponseLudique);
      score++;
      } else {
         showPopup("Mauvaise réponse !",currentQuestion.reponseLudique);
      }
    };
    optionsDiv.appendChild(btn);
    });
    updateProgressBar();
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
    document.getElementById("next-question").style.display= "inline-block";
  }
}
showQuestion(currentIndex)

document.getElementById("popup-nextbtn").onclick = function () {
  document.getElementById("pop-up").style.display = "none";
  nextQuestion();
};


function replayButton(){
  currentIndex=0
  score=0
  showQuestion(currentIndex)
  document.getElementById("popup-nextbtn").style.display="inline-block";
  document.getElementById("next-question").style.display="none";
  updateProgressBar();
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const totalQuestions = questionnaire.length;
  const progress = currentIndex+1;
  const pourcentage = (progress / totalQuestions) * 100;
    progressBar.style.width = `${pourcentage}%`;
    progressText.innerText = `${progress} / ${totalQuestions}`;
  if (pourcentage <= 20) {
    progressBar.style.backgroundColor = "yellow";
  } else if (pourcentage <= 40) {
    progressBar.style.backgroundColor = "gold";
  } else if (pourcentage <= 60) {
    progressBar.style.backgroundColor = "orange";
  } else if (pourcentage <= 80) {
    progressBar.style.backgroundColor = "brown";
  } else  progressBar.style.backgroundColor = "red";
}
