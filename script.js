const skillList = document.getElementById("skillList");
const skillBook = new SkillBook(skillList);
const buttonAdd = document.createElement("button");
const skillInput = document.createElement("input");
const body = document.querySelector("body");
const exampleButton = document.createElement("button");

body.appendChild(exampleButton);
body.appendChild(skillInput);
body.appendChild(buttonAdd);
buttonAdd.textContent = "Add skill";
exampleButton.textContent = "Example skill";

exampleButton.addEventListener("click", () => {
    skillBook.skillList = ["rip", "shred", "mangle"];
    skillBook.update();
    skillBook.remove();
});

buttonAdd.addEventListener("click", () => {
    skillBook.add(skillInput.value);
    console.log(skillBook.skillList);

    skillBook.remove();
});
