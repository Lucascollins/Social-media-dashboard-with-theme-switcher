'use strict'




function Mode(){
    var input = document.getElementById('bttn')
    var back = document.querySelector('.back')
    var cards = document.querySelectorAll(".social-grid, .overview-grid")
    var texts = document.querySelectorAll(".header-text, h1")
    var subText = document.querySelectorAll('p')
    if(input.checked == true){
        document.body.style.background = "hsl(0, 0%, 100%)";
        back.style.background = "hsl(225, 100%, 98%)";
        cards.forEach(element => {
            element.style.background = 'hsl(227, 47%, 96%)'
        });
        texts.forEach(element=>{
            element.style.color = 'hsl(230, 17%, 14%)'
        });
        subText.forEach(element=>{
            element.style.color = 'hsl(228, 12%, 44%)'
        })
        
    }else{
        document.body.style.background = "hsl(230, 17%, 14%)";
        back.style.background = "hsl(232, 19%, 15%)";
        cards.forEach(element => {
            element.style.background = 'hsl(228, 28%, 20%)'
        });
        texts.forEach(element=>{
            element.style.color = 'hsl(0, 0%, 100%)'
        });
        subText.forEach(element=>{
            element.style.color = 'hsl(228, 34%, 66%)'
        })
    }
}