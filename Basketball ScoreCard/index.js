const carde = document.querySelector(".carde");
const btns = document.querySelectorAll(".btn");



let count = 0
const increment = () => {
    count += 1;

    carde.textContent = count;
    highlight();
    console.log(carde.textContent)
}

const increment2 = () => {
    count += 2;

    carde.textContent = count;
    highlight();
}

const increment3 = () => {
    count += 3;

    carde.textContent = count;
    highlight();
}


btns[0].addEventListener("click", increment);
btns[1].addEventListener("click", increment2);
btns[2].addEventListener("click", increment3);



const para = document.querySelector(".card");
const buttons = document.querySelectorAll(".btn2");



let add = 0
const increment4 = () => {
    add += 1;

    para.textContent = add;
    highlight();
    console.log(card.textContent)
}

const increment5 = () => {
    add += 2;

    para.textContent = add;
    highlight();
}

const increment6 = () => {
    add += 3;

    para.textContent = add;
    highlight();
}


buttons[0].addEventListener("click", increment4);
buttons[1].addEventListener("click", increment5);
buttons[2].addEventListener("click", increment6);


const NewGame = document.querySelector(".btn3");
const reset = () => {
    count = 0;
    add = 0;
    para.textContent = add;
    carde.textContent = count;
    para.classList.remove("high")
    carde.classList.remove("high")
}
NewGame.addEventListener("click", reset);

const highlight = () => {
    if (count > add) {
        carde.classList.add("high");
        para.classList.remove("high")
    } else if (add === count) {
        carde.classList.add("high");
        para.classList.add("high");
    } else {
        para.classList.add("high");
        carde.classList.remove("high");
    }
}














