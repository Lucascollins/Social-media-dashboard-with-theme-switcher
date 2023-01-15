'use strict'



function Mode(){
    var input = document.getElementById('bttn')
    var back = document.querySelector('.back')
    var cards = document.querySelectorAll(".social-grid, .overview-grid")
    var texts = document.querySelectorAll(".header-text, h1,.header")
    var subText = document.querySelectorAll('p')


    if(input.checked == true){
        document.body.style.background = "hsl(0, 0%, 100%)";
        back.style.background = "hsl(220, 100%, 98%)";
        cards.forEach(e => {
            e.classList.toggle('active')
        });
        texts.forEach(e=>{
            e.classList.toggle('active')
        });
        subText.forEach(e=>{
            e.classList.toggle('active')
        })
        
    }else{
        document.body.style.background = "hsl(230, 17%, 14%)";
        back.style.background = "hsl(232, 19%, 15%)";
        cards.forEach(e => {
            e.classList.toggle('active')
        });
        texts.forEach(e=>{
            e.classList.toggle('active')
        });
        subText.forEach(e=>{
            e.classList.toggle('active')
        })
    }
}