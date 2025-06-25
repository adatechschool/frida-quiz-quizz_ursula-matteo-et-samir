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