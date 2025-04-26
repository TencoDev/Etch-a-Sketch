console.log("Hello World!");
const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset-button");
const resizeButton = document.querySelector("#resize-button");

let gridSize = 16;


resetButton.addEventListener("click", () => {
    console.log("Reset button clicked!");
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = "cornflowerblue";
    })

})

resizeButton.addEventListener("click", () => {
    console.log("Resize button clicked!");
    const newSize = parseInt(prompt("Enter new grid size, must be even:"), 10);

    if (isNaN(newSize) || newSize < 1 || newSize > 100 || newSize % 2 !== 0){
        alert("Please enter a valid even number between 1 and 100");
        return;
    }

    gridSize = newSize;
    container.innerHTML = "";


    const gridItemSize = Math.floor(480/gridSize)

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = createGridItem();
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;
        container.appendChild(gridItem);
    }


})

function createGridItem(){
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "Red"
    });

    return gridItem
}


for (let i=0; i<gridSize*gridSize; i++){
    const gridItem  = createGridItem();
    container.appendChild(gridItem);
}