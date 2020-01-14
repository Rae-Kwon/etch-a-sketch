const body = document.querySelector("body")
const container = document.createElement("div");

//Create container for grid
container.setAttribute("id", "container");
body.appendChild(container);

//Create grids 

for (let i = 1; i < 257; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid");
    gridSquare.textContent = `${i}`;

    container.appendChild(gridSquare);

    //Change color when hovered over
    gridSquare.addEventListener("mouseover", hoverEffect);

    function hoverEffect() {
        gridSquare.classList.add("hover");
    }
}

