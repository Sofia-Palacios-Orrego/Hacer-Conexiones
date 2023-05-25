function changeName () {
    let editName = document.querySelector("#username");
    editName.innerText = "Sofía Palacios" 
}

function acceptReq() {
    let jsnumber2 = document.querySelector(".number2");
    number2= Number(jsnumber2.textContent);
    number2 ++;
    jsnumber2.innerText = number2;

    let name1 = document.querySelector(".name1");
    name1.style.display = "none";

}

function denyReq (){
    let name1 = document.querySelector(".name1");
    name1.style.display = "none";

}


function acceptsecReq() {
    let jsnumber2 = document.querySelector(".number2");
    number2= Number(jsnumber2.textContent);
    number2 ++;
    jsnumber2.innerText = number2;

    let name2 = document.querySelector(".name2");
    name2.style.display = "none";

}

function denysecReq (){
    let name2 = document.querySelector(".name2");
    name2.style.display = "none";

}