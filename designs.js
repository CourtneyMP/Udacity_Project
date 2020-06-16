//Define the variables using element IDs

let canvas = document.querySelector('#pixelCanvas');
let size = document.querySelector('#sizePicker');
let rowNumber = document.querySelector('#inputHeight');
let cellNumber = document.querySelector('#inputWidth');
let backgroundColor = document.querySelector('#colorPicker');

// Select color input
function cellBackground(event){
    //defining cells in a table - td element in tbody 
    if(event.target.nodeName==='TD'){
        event.target.style.backgroundColor = backgroundColor.value;
    }
}
//listen for the event click in pixelCanvas and then add the background color using cellBackground function
canvas.addEventListener('click',cellBackground)

// Select size input
// listen for the submit button to be hit and then make the grid and clear anything there already
size.addEventListener('submit',function(t){
    canvas.innerHTML='';
    t.preventDefault();
    makeGrid(rowNumber, cellNumber);
})

// When size is submitted by the user seen above, call makeGrid() below

function makeGrid(x,y) {
    let i=0;
    let j=0;
    for (let i =0; i<x.value; i++){
        var addRow = canvas.insertRow(i);
    for (let j=0; j<y.value; j++){
        addRow.insertCell(0); }
    }
}


