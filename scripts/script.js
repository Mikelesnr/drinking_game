'use strict'
const btnReset=document.querySelector('.btn-reset');
const btnPick=document.querySelector('.btn-pick');
const btnOpen=document.querySelector('.btn-open');
const btnDeckReset=document.querySelector('.btn-shuffle');
const deckImg=document.getElementById('deck-img');
const centerImg=document.getElementById('center-img');
const selectedImg=document.getElementById('selected-img')
let centerDenomination="";
let centerSuit="";

const denominations =['ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','joker','joker']
const suits=['OfSpades','OfDiamonds','OfHearts','OfClubs']
const picker = function(array) {
    return array[Math.floor(Math.random()*array.length)]
}
function cardSelector() {
    const denomination=picker(denominations);
    const suit=picker(suits);
    if(denomination!="joker"){
        selectedImg.src=`./images/${denomination+suit}.jpg`;
        if(denomination==centerDenomination||suit==centerSuit){
            centerDenomination=denomination;
            centerSuit=suit;
            centerImg.src=`./images/${denomination+suit}.jpg`;
            alert('chug your drink');
        }
    }else{
        selectedImg.src="./images/joker.jpg";
        deckImg.src="./images/joker.jpg";
        alert('chug your drink');
    }    
}
const reset=function (img) {
    img.src="./images/backCover.jpg"
}
btnPick.addEventListener('click',function(){
    if(centerImg.getAttribute('src') != './images/backCover.jpg'){
    cardSelector();
    }
});
btnOpen.addEventListener('click',function () {
    const denomination=picker(denominations);
    const suit=picker(suits);
    if(denomination!="joker"){
        if(centerImg.getAttribute('src') == './images/backCover.jpg'){
        centerImg.src=`./images/${denomination+suit}.jpg`;
        centerDenomination=denomination
        centerSuit=suit;
        }
    }
});
btnDeckReset.addEventListener('click',function () {
    deckImg.src="./images/backCover.jpg";
})
btnReset.addEventListener('click',function(){
    if(centerImg.getAttribute('src') != './images/backCover.jpg'){
    reset(centerImg);
    reset(deckImg);
    reset(selectedImg);
    }
})