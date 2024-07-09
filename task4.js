if (localStorage.counter === undefined){
    localStorage.counter = 0
}
let startTime = new Date().getTime()
let startClicks = localStorage.counter

let counter = document.getElementById("1")
counter.innerHTML = localStorage.counter

let averageSpan = document.getElementById("2")
averageSpan.innerHTML = "0"
let button = document.querySelector("button")
button.onclick = function(){
    localStorage.counter = +localStorage.counter + 1
    counter.innerHTML = localStorage.counter
}

setInterval(function(){
    let seconds = (new Date().getTime() - startTime)/1000
    let average = ((localStorage.counter - startClicks)/seconds).toFixed(2)
    averageSpan.innerHTML = average   
},
1000)

