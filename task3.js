if (localStorage.counter === undefined){
    localStorage.counter = 0
}

let counter = document.getElementById("1")
counter.innerHTML = localStorage.counter

let button = document.querySelector("button")
button.onclick = function(){
    localStorage.counter = +localStorage.counter + 1
    counter.innerHTML = localStorage.counter
}