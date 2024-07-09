let body = document.body

function selectHandler(e){
    e.preventDefault()
}

function rightClickHandler(e){
    e.preventDefault()
}

body.addEventListener("selectstart", selectHandler)
body.addEventListener("contextmenu", rightClickHandler)