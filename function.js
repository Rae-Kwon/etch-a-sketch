const body = document.querySelector("body")

//Create container for drawing grid
const container = document.querySelector("#container");

const resetGrid = document.querySelector("#reset");

//Text box to select grid size
const gridSizeSelect = document.querySelector("#gridSizeValue");

//Button to create grid
const gridSizeSelectSubmit = document.querySelector("#gridSubmit");

//Button to reset canvas
const newGrid = document.querySelector("#newGrid");

//Button for drawing with red color
const redDrawingTool = document.querySelector("#red");

//Button for drawing with blue color
const blueDrawingTool = document.querySelector("#blue");

//Button for drawing with blue color
const blackDrawingTool = document.querySelector("#black");

//Button for drawing with blue color
const yellowDrawingTool = document.querySelector("#yellow");

const sizeSelectText = document.querySelector("#sizeSelectText");

//Empty variable for grid size
let gridSize;

newDrawing(body);

//Hides all drawing elements and adds grid size selection elements
function newDrawing(body) {
    const containerExists = document.querySelector("#container");
    if (containerExists) {
        body.removeChild(container);
    }
    resetGrid.style.visibility = "hidden";
    newGrid.style.visibility = "hidden";
    redDrawingTool.style.visibility = "hidden";
    blueDrawingTool.style.visibility = "hidden";
    blackDrawingTool.style.visibility = "hidden";
    yellowDrawingTool.style.visibility = "hidden";

    gridSizeSelect.style.visibility = "visible";
    gridSizeSelectSubmit.style.visibility = "visible";
    sizeSelectText.style.visibility = "visible";
}

//Hides all grid size select elements
function removeGridSelect(body) {
    gridSizeSelect.style.visibility = "hidden";
    gridSizeSelectSubmit.style.visibility = "hidden";
    sizeSelectText.style.visibility = "hidden";

    body.appendChild(container);
    resetGrid.style.visibility = "visible";
    newGrid.style.visibility = "visible";
    redDrawingTool.style.visibility = "visible";
    blueDrawingTool.style.visibility = "visible";
    blackDrawingTool.style.visibility = "visible";
    yellowDrawingTool.style.visibility = "visible";
}

//Removes class hover
function resetDrawing(gridSquare) {
    const gridColor = document.querySelector(".hover");
    gridColor.removeAttribute("style");
    gridSquare.classList.remove("hover"); 
}

//Creates grid squares for drawing and resets grid canvas
function gridManipulation(gridSize, container) {
    let totalGrid = gridSize ** 2;
    for (let firstGrid = 1; firstGrid <= totalGrid; firstGrid++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid");
        container.appendChild(gridSquare);
    
        //Change color when hovered over
        //Event handler to change hover to red for drawing
        redDrawingTool.addEventListener("click", function() {
            gridSquare.addEventListener("mouseover", function() {
                gridSquare.style.backgroundColor = "red";
            })
        });

        //Event handler to change hover to blue for drawing
        blueDrawingTool.addEventListener("click", function() {
            gridSquare.addEventListener("mouseover", function() {
                gridSquare.style.backgroundColor = "blue";
            })
        })

        //Event handler to change hover to blue for drawing
        blackDrawingTool.addEventListener("click", function() {
            gridSquare.addEventListener("mouseover", function() {
                gridSquare.style.backgroundColor = "black";
            })
        })

        //Event handler to change hover to blue for drawing
        yellowDrawingTool.addEventListener("click", function() {
            gridSquare.addEventListener("mouseover", function() {
                gridSquare.style.backgroundColor = "yellow";
            })
        })

        resetGrid.addEventListener("click", function() {
            gridSquare.style.backgroundColor = "white";
        });
    }
}

function adjustGridSize(container) {
    const gridSelection = document.querySelector("#gridSizeValue");
    const errorMessage = document.querySelector("#errorMessage");
    gridSize = gridSelection.value;
    if (gridSize < 1) {
        errorMessage.textContent = "Cannot make grid, this value is too low. Try again";
    } else if (gridSize > 100) {
        errorMessage.textContent = "Grid will crash site, this value is too high. Try again";
    } else if (isNaN(gridSize)){
        errorMessage.textContent = "This is not a number, try again";
    } else {
        errorMessage.style.visibility = "hidden";
        gridManipulation(gridSize, container);
        container.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
        removeGridSelect(body);
    }
}

//Event handler for set up of grid and removes grid select elements on click
gridSizeSelectSubmit.addEventListener("click", function() {
    adjustGridSize(container);
});

//Event handler for set up of grid and removes grid select elements on keypress Enter
gridSizeSelect.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        adjustGridSize(container);
    }
});

//Event handler for set up of grid select and removes all grids for clear canvas
newGrid.addEventListener("click", function() {
    const grid = document.getElementsByClassName("grid");
    while (grid[0]) {
        grid[0].parentNode.removeChild(grid[0]);
    }
    newDrawing(body);
});