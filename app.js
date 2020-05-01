class Wasps {
    constructor(name, healthPoints) {
        this.name = name;
        this.healthPoints = healthPoints;
    }
}

class Queen extends Wasps {
    constructor() {
        super("Queen", 80);
    }

    hitPoints() {
        this.healthPoints -= 7;
    }
}

class Worker extends Wasps {
    constructor() {
        super("Worker", 68);
    }

    hitPoints() {
        this.healthPoints -= 10;
    }
}

class Drone extends Wasps {
    constructor() {
        super("Drone", 60);
    }

    hitPoints() {
        this.healthPoints -= 12;
    }
}

let waspArray = [];
const reset = () => {
    waspArray = [];
    waspArray.push(new Queen())
    for (let i = 0; i < 5; i++) {
        waspArray.push(new Worker())
    }

    for (let i = 0; i < 8; i++) {
        waspArray.push(new Drone())
    }
}

reset();

const hive = document.querySelector('.hive');
const eachHit = document.querySelector('.waspHit')
const resetGame = document.querySelector('.resetGame')

const renderWaspOnPage = () => {
    const waspLifeStatus = waspArray.filter(wasp => (wasp.healthPoints > 0))
    const updatedStatus = waspLifeStatus.map(wasp => `<div class="eachWasp">${wasp.name}<span class="health">${wasp.healthPoints}</span></div>`)
    hive.innerHTML = updatedStatus.join("");
}
renderWaspOnPage();

eachHit.addEventListener("click", function () {
    const waspRandomPick = Math.floor(Math.random() * waspArray.length);
    const randomWasp = waspArray[waspRandomPick];
    randomWasp.hitPoints();
    renderWaspOnPage();
});

//WIN CONDITION NOT WORKING - NEED TO FIX
const winCondition = () => {
    if (this.Queen) {
        alert("QUEEN BEE DIED! GAMEOVER")
    } else if ((this.Worker.length <= 0) && (this.Drone.length <= 0)) {
        alert("QUEEN PROTECTED!!")
    }
}
winCondition();

resetGame.addEventListener("click", function () {
    reset();
    renderWaspOnPage();
});
