const div = document.createElement("div");
document.body.appendChild(div);

let size = 10;
let isTrue = true;
let halfWindow = window.innerHeight / 2;

document.body.style.height = "10000px"
div.style.width = 100 + "%";
div.style.height = size + "px";
div.style.position = "fixed";
div.style.left = "0";
div.style.top = "0";
div.style.backgroundColor = "green";

const changeHeight = () => {

if (size > halfWindow){
    isTrue = false;
    div.style.backgroundColor = "red"
}
    
if (size < 10){
    isTrue = true;
    div.style.backgroundColor = "green"
}

if (isTrue){
size += 10;
} else {
    size -= 10;
}

div.style.height = size + "px";

}

window.addEventListener("scroll", changeHeight);