const colors = [ "#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

const boxesElement = document.querySelector(".boxes");
const countBoxElement = document.querySelector("#score span");
const moreBoxBtnElement = document.querySelector("#btn");

const createSingleBox = (color) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.background = color;
    box.addEventListener("click", () => {
        removeBox(box);
        updateTotalBox();
    });
    return box;
}

const createBoxes = () => {
    for (let i = 0; i < colors.length; i++) {
        let singleBox = createSingleBox(colors[i]);
        boxesElement.appendChild(singleBox);
    }
}

const updateTotalBox = () => {
    let numberOfBox = boxesElement.childElementCount;
    countBoxElement.innerText = " " + numberOfBox;
}


const removeBox = (thisBox) => {
    boxesElement.removeChild(thisBox);
} 

const addClickEventListenerForMoreBoxBtn = () => {
    moreBoxBtnElement.addEventListener("click", () => {
        createBoxes();
        updateTotalBox();
    })
}

// main
const main = () => {
    addClickEventListenerForMoreBoxBtn();
    createBoxes();
    updateTotalBox();
}

////////////////////////

main();