let time = 10
const trump = new Audio('video.M4V')
const cartman = new Audio('video 2.M4V')
const cartman1 = new Audio('video 3.M4V')
const nerveux = new Audio('nerveux.mp4')
function showPopup(titreMessage, reponseLudique) {
  const message = `${titreMessage}\n\n${reponseLudique}`;
  document.getElementById("pop-upMessage").innerText = message;
  document.getElementById("pop-up").style.display = "flex";
  document.getElementById("popup-nextbtn").style.display = "block";
}
function closePopup() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("popup-nextbtn").disabled = false;
}
let currentIndex = 0;
let score = 0;
function showQuestion(index) {
  const currentQuestion = currentQuiz[index];
  const questionDiv = document.getElementById("quiz-questions");
  questionDiv.innerText = currentQuestion.question;
  const optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = ""; // Vide moi les anciennes réponses
  document.getElementById("next-question").style.display = "none";
  currentQuestion.options.forEach((option, i) => {
    let allbtn = []
    const btn = document.createElement("button");
    allbtn.push(btn)
    btn.innerText = option.answer;
    btn.onclick = () => {
      const buttons = document.querySelectorAll("#quiz-options button");
      buttons.forEach(btn => btn.disabled = true);
      clearInterval(timeInterval)
      if (i === currentQuestion.correct) {
        showPopup("Bonne réponse !", currentQuestion.reponseLudique);
        cartman.play()
        score++;
      } else {
        showPopup("Mauvaise réponse !", currentQuestion.reponseLudique);
        nerveux.play()
      }
    };
    optionsDiv.appendChild(btn);
  });
  updateProgressBar();
}
function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    showQuestion(currentIndex);
  } else {
    // Fin du quiz
    document.getElementById("quiz-questions").innerText = `Quiz terminé ! Ton score est : ${score}/${currentQuiz.length}`;
    document.getElementById("quiz-options").innerHTML = "";
    document.getElementById("popup-nextbtn").style.display = "none";
    document.getElementById("next-question").style.display = "inline-block";
    document.getElementById('accueil').style.display = "inline-block"
    document.getElementById("quiz-timer").style.display = "none"
  }
}
document.getElementById("popup-nextbtn").onclick = function () {
  document.getElementById("pop-up").style.display = "none";
  nextQuestion();
  startTimer(time)
};
function replayButton() {
  currentIndex = 0
  score = 0
  showQuestion(currentIndex)
  startTimer(time)
  document.getElementById("popup-nextbtn").style.display = "inline-block";
  document.getElementById("next-question").style.display = "none";
  document.getElementById('rapAfro').style.display = "none"
  document.getElementById("accueil").style.display = "none"
  document.getElementById("popup-nextbtn").style.display = "inline-block";
  document.getElementById("next-question").style.display = "none";
  updateProgressBar();
}
function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const totalQuestions = currentQuiz.length;
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
  document.body.style.backgroundImage = "";
}
function showPopup(titreMessage, reponseLudique) {
  const message = `${titreMessage}\n\n${reponseLudique}`;
  document.getElementById("pop-upMessage").innerText = message;
  document.getElementById("pop-up").style.display = "flex";
  document.getElementById("popup-nextbtn").style.display = "block";
}
function closePopup() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("popup-nextbtn").disabled = false;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    showQuestion(currentIndex);
  } else {
    // Fin du quiz
    document.getElementById("quiz-questions").innerText = `Quiz terminé ! Ton score est : ${score}/${currentQuiz.length}`;
    document.getElementById("quiz-options").innerHTML = "";
    document.getElementById("popup-nextbtn").style.display = "none";
    document.getElementById("next-question").style.display = "inline-block";
    document.getElementById('accueil').style.display = "inline-block"
    document.getElementById("quiz-timer").style.display = "none"
  }
}
document.getElementById("popup-nextbtn").onclick = function () {
  document.getElementById("pop-up").style.display = "none";
  nextQuestion();
  startTimer(time)
};
function replayButton() {
  currentIndex = 0
  score = 0
  showQuestion(currentIndex)
  startTimer(time)
  document.getElementById("popup-nextbtn").style.display = "inline-block";
  document.getElementById("next-question").style.display = "none";
  document.getElementById('rapAfro').style.display = "none"
  document.getElementById("accueil").style.display = "none"
  document.getElementById("popup-nextbtn").style.display = "inline-block";
  document.getElementById("next-question").style.display = "none";
  updateProgressBar();
}
function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const totalQuestions = currentQuiz.length;
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
  document.body.style.backgroundImage = "";
}
let timer = 10;
let timeInterval;
function startTimer(duration) {
  let timeLeft = duration;
  const timeDisplay = document.getElementById("quiz-timer");
  timeDisplay.innerText = `Temps restant: ${timeLeft}S`
  if (timeInterval) clearInterval(timeInterval);
  timeInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.innerText = `Temps restant: ${timeLeft}S`;
    console.log(timeLeft)
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timeDisplay.innerText = "Temps écoulé !";
      document.querySelectorAll("#quiz-options button").forEach(btn => btn.disabled = true);
      showPopup("Temps écoulé !", "La bonne réponse était : " + currentQuiz[currentIndex].options[currentQuiz[currentIndex].correct].answer);
    }
  }
    , 1000);
}












