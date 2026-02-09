
function newButton()
{
    let p = document.querySelector(".newText")
    p.style.backgroundColor = "yellow";
    p.style.borderStyle = "solid";
    p.style.borderWidth  = "medium" ;
    p.style.borderColor = "black";
    p.style.borderRadius = "15px";
    p.style.color = "blue";
}
function sumbit_button()
{
    alert("thank you for contacting us!");
}

function changeColor(color)
{
    console.log(color);
    let p = document.querySelector("#items");
    p.className = color;
}