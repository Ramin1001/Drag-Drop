"use strict";

let dropZone = document.querySelector('.dropZone');
let draggables = document.querySelectorAll('.inner');

//for draggable elements
for(let draggable of draggables){
    draggable.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("draggedElementID", this.id);
    })
}

//for drop area
dropZone.addEventListener('dragover', function(e){
    e.preventDefault();
})

dropZone.addEventListener("drop", function(e){
    let draggedID = e.dataTransfer.getData("draggedElementID");

    let draggedElement = document.getElementById(draggedID);

    dropZone.appendChild(draggedElement);

    CheckGame();
})


function CheckGame(){
    let elements = document.querySelectorAll('.dropZone .inner');

    if(elements.length == 8){
        let endGame = true;

        for(let i = 0; i < elements.length; i++){

            let chosendn = +elements[i].getAttribute('data-number');

            if(chosendn != i+1){
                endGame = false;
                break;
            }
        }

        if(endGame){
            document.querySelector('.successMessage').classList.remove("d-none");
        }
    }
    
}