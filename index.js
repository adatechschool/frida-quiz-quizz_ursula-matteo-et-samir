

const questionnaire = [
   
    {
      text: "Quel pays est souvent considéré comme le berceau de l’Afrobeat ?",
      options: [
       {answer:"A.Ghana"},
        {answer:"B. Afrique du Sud"},
        {answer:"C. Nigeria"},
        {answer:"D. Côte d’Ivoire"}],
        correct:2,//reponse C
    },

{
      text: "La musique duquel de ces peuples a fortement influencé Fela Kuti dans la création de l’afrobeat ?",
      options: [
       {answer:"A. Yoruba"},
        {answer:"B. Massaï"},
        {answer:"C. Touareg"},
        {answer:"D.Pygmée"}],
        correct:0,//reponse A
    },

{
      text: "Quel artiste est connu pour avoir popularisé le mélange rap et afrobeat avec des sons comme Afro Trap Part.3 ?",
      options: [
       {answer:"A.Niska<"},
        {answer:"B.  MHD"},
        {answer:"C.Burna Boy"},
        {answer:"D.Olamide"}],
        correct:1,// reponse B
    },
{
      text: "Quel instrument est le plus typique dans les instrus afrobeat ?",
      options: [
       {answer:"A.Guitare électrique"},
        {answer:"B.Balafon"},
        {answer:"C.Percussions / batterie africaine"},
        {answer:"D.Harmonica"}],
        correct:2,// reponse c
    },
{
      text: "Quel artiste a été l’un des premiers à parler de la banlieue dans le rap français dans les années 90 ?",
      options: [
       {answer:"A.IAM"},
        {answer:"B. Kery James"},
        {answer:"C.MC Solaar"},
        {answer:"D. NTM"}],
        correct:3,//Reponse D
    },
    
]
let questionIndex=0;
const question1= document.getElementById("quiz-questions");
const option1= document.getElementById("quiz-options");
const nextButton= document.getElementById("nextbtn")


// document.querySelector('h1').innerHTML = questionnaire[3].text 

