var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');

var selecteditem = "";
var selectforremove = "";

var Slot1 = document.getElementById('InvSlot1');
var Slot2 = document.getElementById('InvSlot2');
var Slot3 = document.getElementById('InvSlot3');


let Slot1Empty = true;
let Slot2Empty = true;
let Slot3Empty = true;
let invopen = true;
function AddToInv(element) {
    if (invopen == false){
    document.getElementById('wizard').innerHTML = "Inventory closed.";
    selecteditem = element;}
    else if (Slot1Empty == true && invopen == true) {
        Slot1.innerHTML = element.outerHTML;
        element.outerHTML = "";
        document.getElementById('wizard').innerHTML = "";
        Slot1Empty = false;
    }
    else if (Slot1Empty == false && Slot2Empty == true && invopen == true) {
        selecteditem = element;
        Slot2.innerHTML = element.outerHTML;
        Slot2Empty = false;
        element.outerHTML = "";
        document.getElementById('wizard').innerHTML = "";

    } else if (Slot1Empty == false && Slot2Empty == false && Slot3Empty == true && invopen == true) {
        selecteditem = element;
        Slot3.innerHTML = element.outerHTML;
        Slot3Empty = false
        element.outerHTML = "";
        document.getElementById('wizard').innerHTML = "";
    }

    else {
        document.getElementById('wizard').innerHTML = "Inventory full.";
    }
}
function Remitem1(Slot1) {
    document.getElementById('lootbag').innerHTML += Slot1.innerHTML;
    Slot1.innerHTML = "";
    Slot1Empty = true;
    document.getElementById('wizard').innerHTML = "";



} function Remitem2(Slot2) {
    document.getElementById('lootbag').innerHTML += Slot2.innerHTML;
    Slot2.innerHTML = "";
    Slot2Empty = true;
    document.getElementById('wizard').innerHTML = "";
}

function Remitem3(Slot3) {
    document.getElementById('lootbag').innerHTML += Slot3.innerHTML;
    Slot3.innerHTML = "";
    Slot3Empty = true;
    document.getElementById('wizard').innerHTML = "";
}
function hideinv(){
    document.getElementById('inv').style = "display: none;"
    document.getElementById('invbutt').outerHTML = /*html*/`
    <button id="invbutt" class="button" onclick="showinv()">Show Inventory</button>
    `;
    invopen = false;
}
function showinv(){
    document.getElementById('inv').style = "display: flex;"
    document.getElementById('invbutt').outerHTML = /*html*/`
    <button id="invbutt" class="button" onclick="hideinv()">Hide Inventory</button>
    `;
    invopen = true;
}





