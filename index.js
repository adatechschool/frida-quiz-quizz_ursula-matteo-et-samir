const questionnaire = [
   
    {
      text: "Quel pays est souvent considéré comme le berceau de l’Afrobeat ?",
      options: [
       {answer:"A.Ghana"},
        {answer:"B. Afrique du Sud"},
        {answer:"C. Nigeria"},
        {answer:"D. Côte d’Ivoire"},
        {reponseLudique: "L’Afrobeat est né au Nigeria dans les années 1970 grâce à Fela Kuti, qui a fusionné les rythmes traditionnels africains, le jazz et le funk avec des messages politiques forts."}],
    },

{
      text: "La musique duquel de ces peuples a fortement influencé Fela Kuti dans la création de l’afrobeat ?",
      options: [
       {answer:"A. Yoruba"},
        {answer:"B. Massaï"},
        {answer:"C. Touareg"},
        {answer:"D.Pygmée"},
        {reponseLudique: "Fela Kuti, lui-même d’origine yoruba, a puisé dans les rythmes, chants et spiritualités de ce peuple pour bâtir la base rythmique et mélodique de l’Afrobeat."}],
    },

{
      text: "Quel artiste est connu pour avoir popularisé le mélange rap et afrobeat avec des sons comme Afro Trap Part.3 ?",
      options: [
       {answer:"A.Niska"},
        {answer:"B.  MHD"},
        {answer:"C.Burna Boy"},
        {answer:"D.Olamide"},
        {reponseLudique:" MHD a lancé le style 'Afro Trap', un genre hybride qui a conquis la jeunesse francophone et remis à l’honneur les influences africaines dans le rap."}],
    },
{
      text: "Quel instrument est le plus typique dans les instrus afrobeat ?",
      options: [
       {answer:"A.Guitare électrique"},
        {answer:"B.Balafon"},
        {answer:"C.Percussions / batterie africaine"},
        {answer:"D.Harmonica"},
        {reponseLudique:"Les percussions sont au cœur de l’Afrobeat : elles créent un rythme hypnotique et puissant qui pousse à danser tout en transmettant un message."}],
    },
{
      text: "Quel artiste a été l’un des premiers à parler de la banlieue dans le rap français dans les années 90 ?",
      options: [
       {answer:"A.IAM"},
        {answer:"B. Kery James"},
        {answer:"C.MC Solaar"},
        {answer:"D. NTM"},
        {reponseLudique:"NTM (JoeyStarr et Kool Shen) a été pionnier dans l’expression de la colère des jeunes des quartiers populaires."}],
    },
    
]

let currentQuestionIndex = 0 
let buttonNext = document.getElementById("next-question")
function loadQuestion(){
     document.querySelector('h2').innerHTML = questionnaire[currentQuestionIndex].text
  document.getElementById('reponses1').innerText = questionnaire[currentQuestionIndex].options[0].answer
  document.getElementById('reponses2').innerText = questionnaire[currentQuestionIndex].options[1].answer
  document.getElementById('reponses3').innerText = questionnaire[currentQuestionIndex].options[2].answer
  document.getElementById('reponses4').innerText = questionnaire[currentQuestionIndex].options[3].answer

}
function nextButton(){
    currentQuestionIndex += 1
   
    loadQuestion()
   
}

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

if(currentQuestionIndex === 4 )
{
     document.getElementById("replay-button").style.display = "none"
}
else{
     document.getElementById("replay-button").style.display = "block"
}





// document.querySelector('h1').innerHTML = questionnaire[3].text 