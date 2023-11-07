const content = document.querySelector(".content");
for(let i = 0; i < 64; i++){
    content.innerHTML += `<div class="box" id="${i+1}"></div>`;
}

const boxes = document.querySelectorAll(".box");

boxes.forEach(element => {
    element.addEventListener("click", (event) => {
        console.log(event);
        let currentElement = event.target;

        if(currentElement.style.backgroundColor === ""){
            currentElement.style.backgroundColor = "#ff0000";
            currentElement.textContent = currentElement.id;
        }
        else{
            currentElement.style.backgroundColor = "";
            currentElement.textContent = null;
        }

        currentElement.style.textAlign = "center";

    })
})
boxes.forEach(element => {

    element.addEventListener("dblclick", (event) => {
        currentElement.style.backgroundColor = "rgb(157, 47, 47)";
    })
})
