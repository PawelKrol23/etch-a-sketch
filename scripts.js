const gridSize = 500 // in pixels
let gridSizeInInput = 36
let gridSizeInGrid = 36
let color = "#000000"
const gridContainer = document.querySelector(".grid-inner-container")
const colorInput = document.querySelector("#color-input")
const gridSizeInput = document.querySelector("#grid-size-input")
const sizeDisplay = document.querySelector("p")

colorInput.addEventListener("change", () => {
    color = colorInput.value
})

gridSizeInput.addEventListener("change", () => {
    gridSizeInInput = gridSizeInput.value
    sizeDisplay.innerText = gridSizeInInput + "x" + gridSizeInInput
})

function generateGrid(size) {
    const gridCellSize = gridSize / size + "px"

    const grid = document.createElement("div")
    grid.style.width = gridSize + "px"
    grid.style.height = gridSize + "px"

    for(let i = 0;i<size;i++) {
        const gridRow = document.createElement("div")
        gridRow.style.display = "flex"
        for(let j = 0;j<size;j++) {
            const gridCell = document.createElement("div")
            gridCell.style.width = gridCellSize
            gridCell.style.height = gridCellSize
            gridCell.style.color = "black"
            gridCell.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = color
            })
            gridRow.appendChild(gridCell)
        }
        grid.appendChild(gridRow)
    }

    // removes actual grid
    if(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    gridContainer.appendChild(grid)
}

generateGrid(gridSizeInGrid)
document.querySelector("#reset").addEventListener("click", () => {
    gridSizeInGrid = gridSizeInInput
    generateGrid(gridSizeInGrid)
})