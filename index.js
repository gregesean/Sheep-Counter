///////counting machine/////////

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

///////random choice//////////

const sheep = {
    type: "sheep",
    image: "shep.svg",
    animation: "sheepWalk"
    }
    
const wolf = {
    type: "wolf",
    image: "wolf.svg",
    animation: "wolfWalk"
    }
    
const animals = [sheep, sheep, sheep, sheep, sheep, sheep, sheep, sheep, sheep, sheep, sheep, wolf]

let animal = document.getElementById("animal");
let randomAnimal;

function spawnAnimal() {
    const randomNum = Math.floor(Math.random() * animals.length);
    randomAnimal = animals[randomNum];

    animal.src = randomAnimal.image;
    animal.classList.add(randomAnimal.animation);
    animal.classList.remove("noDisplay");
}

animal.addEventListener("animationend", () => {
    animal.classList.add("noDisplay")
    animal.classList.remove(randomAnimal.animation);

    setTimeout(() => {
        spawnAnimal();
    }, 10);
});

spawnAnimal();