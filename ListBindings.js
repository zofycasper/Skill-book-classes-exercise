class SkillBook {
    constructor(element) {
        this.listElement = element;
        this.skillList = [];
    }

    static createListItem(skill) {
        const li = document.createElement("li");

        li.textContent = skill;

        const buttonRemove = document.createElement("button");
        buttonRemove.textContent = "remove";
        buttonRemove.setAttribute("id", `${skill}`);
        buttonRemove.classList.add("remove");
        li.appendChild(buttonRemove);

        return li;
    }

    add(skill) {
        this.skillList.push(skill);
        this.update();
    }

    remove() {
        const buttonRems = document.querySelectorAll(".remove");

        buttonRems.forEach((buttonRem) => {
            buttonRem.addEventListener("click", () => {
                let buttonId = buttonRem.id;
                console.log(buttonId);
                let index = this.skillList.indexOf(buttonId);

                console.log(index);
                this.skillList.splice(index, 1);
                this.update();
                this.remove();
            });
        });
    }

    update() {
        // Clear all existing list items
        this.clear();
        // Fill list items
        for (const skill of this.skillList) {
            this.listElement.appendChild(SkillBook.createListItem(skill));
        }
    }

    clear() {
        this.listElement.textContent = "";
    }
}
