
const sumbitButton = document.getElementById("sumbitButtom");
sumbitButton.addEventListener("click", () => {
    let validFname = true
    let validLname = true
    let validEmail = true
    let validPhone = true
    let validSubjectMsg = true
    let validMsg = true


    const fname = document.querySelector("#fname").value;
    if (fname.length < 3)
    {
        alert("first name is too short;");
        validFname = false;
    }

    const lname = document.querySelector("#lname").value;
    if (lname.length < 3)
    {
        alert("last name is too short;");
        validLname = false
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
    const email = document.querySelector("#email").value;
    if (!emailPattern.test(email))
    {
        alert("Ilegal email!");
        validEmail = false
    }

    const phone = document.querySelector("#phone_number").value;
    if (phone.length > 10)
    {
        alert("the phone number is too long!");
        validPhone = false
    }
    const subjectMsg = document.querySelector("#subjectMsg").value;
    if (subjectMsg.length < 5)
    {
        alert("the subject of the msg is too short!");
        validSubjectMsg = false;
    }
    
    const msg = document.querySelector("#msg").value;
    if (msg.length < 10)
    {
        alert("the msg is too short!");
        validMsg = false;
    }

    let validSumbit = validFname && validLname && validEmail && validPhone && validSubjectMsg && validMsg
    if (validSumbit)
    {
        alert("the form has been sumbited!!");
    }
    else
    {
        alert("the form has not been sumbited...:(")
    }
    fetch('http://localhost:3000/contact', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({fname: fname, lname: lname, email: email, phone: phone, subjectMsg: subjectMsg, msg: msg}) 
    })


    
    .then(res => res.json())
    .then(data => console.log('Server response:', data))
    .catch(err => console.error(err));
});


function newButton()
{
    let p = document.querySelector(".newText")
    p.style.backgroundColor = "#408A71";
    p.style.borderStyle = "solid";
    p.style.borderWidth  = "medium" ;
    p.style.borderColor = "black";
    p.style.borderRadius = "15px";
    p.style.color = "#091413";
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

function changeTheme()
{
    let p = document.querySelector("#javaScriptFunWrap");
    if (p.classList.contains("whiteTheme"))
    {
        p.classList.replace("whiteTheme", "blackTheme");
    }
    else
    {
        p.classList.replace("blackTheme", "whiteTheme")
    }
}
function changeClass()
{
    let p = document.querySelector("#changeClassText");
    if (p.classList.contains("visible"))
    {
        p.classList.replace("visible", "hidden");
    }
    else
    {
        p.classList.replace("hidden", "visible");
    }
}


function changeTab(tab)
{
    tabTexts = ["Hello", "How are you doing", "have a nice day"]
    let p  = document.querySelector("#tabsText");
    p.textContent = tabTexts[tab]
}

function addOrRemove(element)
{
    if (element.classList.contains("noRed"))
    {
        element.classList.replace("noRed", "yesRed");
    }
    else
    {
        element.classList.replace("yesRed", "noRed");
    }
}
