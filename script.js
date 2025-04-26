console.log("Hello World!");
const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset-button")


resetButton.addEventListener("click", () => {
    console.log("Reset button clicked!")
    const gridItems = document.querySelectorAll(".grid-item")
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = "cornflowerblue"
    })

})

function createGridItem(){
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "Red"
    });

    return gridItem
}


for (let i=0; i<16*16; i++){
    const gridItem  = createGridItem();
    container.appendChild(gridItem);
}