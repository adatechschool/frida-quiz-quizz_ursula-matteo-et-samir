

function initialiserPage() {
  document.getElementById("accueil").style.display = "block";
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("accueil").style.display = "none"
  document.getElementById("disney").style.display = "inline-block"
}
initialiserPage()





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
  const currentQuestion = currentQuiz[index];
  const questionDiv = document.getElementById("quiz-questions");
  questionDiv.innerText = currentQuestion.question;
  const optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = "";


  document.getElementById("next-question").style.display = "none";



  currentQuestion.options.forEach((option, i) => {
    let allbtn = []
    const btn = document.createElement("button");
    allbtn.push(btn)
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

  });
  clearInterval(timeInterval);
  startTimer(10);
  updateProgressBar();
}


function nextQuestion() {
  currentIndex++;
  if (currentIndex < questionnaire.length) {
    showQuestion(currentIndex);
  } else {
    // Fin du quiz
    document.getElementById("quiz-questions").innerText = `Quiz terminé ! Ton score est : ${score}/${currentQuiz.length}`;
    document.getElementById("quiz-options").innerHTML = "";
    document.getElementById("popup-nextbtn").style.display = "none";
    document.getElementById("next-question").style.display = "inline-block";
  }
}
//showQuestion(currentIndex)


document.getElementById("popup-nextbtn").style.display = "none";
document.getElementById("next-question").style.display = "inline-block";
document.getElementById('accueil').style.display = "inline-block"
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
  document.getElementById('rapAfro').style.display = "none"
  document.getElementById("accueil").style.display = "none"


  document.getElementById("popup-nextbtn").style.display = "inline-block";
  document.getElementById("next-question").style.display = "none";
  updateProgressBar();
  clearInterval(timeInterval);

}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const totalQuestions = questionnaire.length;
  const progress = currentIndex + 1;
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
  } else progressBar.style.backgroundColor = "red";

}

function accueil() {
  initialiserPage()
  document.getElementById('accueil').style.display = "none"
  document.getElementById("rapAfro").style.display = "inline-block"
  document.getElementById("next-question").style.display = "none"

}


