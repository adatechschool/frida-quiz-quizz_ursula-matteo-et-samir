const questionnaire = [
   
    {
      question: "Quel pays est souvent considéré comme le berceau de l’Afrobeat ?",
      answer: ["A.Ghana", "B. AfriqueDuSud", "C. Nigeria", "D. CôteDIvoire"],
      correctAnswer : "Nigeria"
    },
    {
      question: "La musique duquel de ces peuples a fortement influencé Fela Kuti dans la création de l’afrobeat ?",
      answer: ["Yoruba", "Massai", "Touareg", "Pygmee"],
      correctAnswer : "Yoruba"
    },
    {
      question: "Quel artiste est connu pour avoir popularisé le mélange rap et afrobeat avec des sons comme Afro Trap Part.3 ?",
      answer: ["Niska", "MHD", "BurnaBoy", "Olamide"],
      correctAnswer : "MHD"
    },
    {
      question: "Quel instrument est le plus typique dans les instrus afrobeat ?",
      answer: ["GuitareElectrique", "Balafon", "PercussionsBatterieAfricaine", "Harmonica"],
      correctAnswer : "PercussionsBatterieAfricaine",
    },
    {
    question: "Quel artiste a été l’un des premiers à parler de la banlieue dans le rap français dans les années 90 ?",
    answer: ["IAM", "KeryJames", "MCSolar", "NTM"],
    correctAnswer : "NTM",
    },
]


const correctAnswer = "Nigeria";
const buttons = document.querySelectorAll(".answer button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === correctAnswer) {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }
       buttons.forEach(btn => btn.disabled = true);
    });
});




