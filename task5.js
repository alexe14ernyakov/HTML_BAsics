let buttons = document.getElementsByClassName("button")
let calculator = document.getElementById("calculator")
let answer = document.getElementById("answer")
let expression = ""

function selectHandler(e){
    e.preventDefault()
}

calculator.addEventListener("selectstart", selectHandler)

for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        if(buttons[i].innerHTML == 'C'){
            expression = ''
        }
        else if(buttons[i].innerHTML == '='){
            expression = eval(expression)
        }
        else{
            expression += buttons[i].innerHTML
        }

        answer.innerHTML = expression
    } 
}