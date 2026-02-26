
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
function changeHeadline()
{
    let p = document.querySelector("#headline")
    p.style.color = "blue";
}
function hideElement()
{
    let p = document.querySelector("#hideElement");
    if (p.style.display === "block")
    {
        p.style.display = "none";
    }
    else
    {
        p.style.display = "block";
    }
}
function headlineText()
{
    let p = document.querySelector("#textChange");
    p.textContent = "epstein just appeared!";
}
function hoverColor()
{
    let p = document.querySelector("#sentenceHover");
    p.style.color = "red";
}
function resetColor()
{
    let p = document.querySelector("#sentenceHover");
    p.style.color = "black";
}
function enterHoverBox()
{
    let p = document.querySelector(".hoverBox");
    p.style.backgroundColor = "yellow";
}
function exitHoverBox()
{
    let p = document.querySelector(".hoverBox");
    p.style.backgroundColor = "grey"
}