let allSpans = document.querySelectorAll(".buttons span")
let results = document.querySelector(".results > span")
let theInput = document.getElementById("the-input")

allSpans.forEach(span => {
    span.addEventListener("click" , (e) => {
        if (e.target.classList.contains("check")) {
            checkItem()
        }
        if (e.target.classList.contains("add")) {
            addItem()
        }
        if (e.target.classList.contains("delete")) {
            deleteItem()
        }
        if (e.target.classList.contains("delete-all")) {
            deleteAll()
        }
        if (e.target.classList.contains("show")) {
            showItems()
        }
    })
})

function showMessage() {
    if(theInput.value === '') {
        results.innerHTML = "Input can't be empty"
    }
}

function checkItem () {
    if (theInput.value !== '') {

        if(localStorage.getItem(theInput.value)){
            results.innerHTML = `Found Local Item Called <span>${theInput.value}</span>`
        } else {
            results.innerHTML = `No Local Item Found With This Name: <span>${theInput.value}</span>`
        }

    }else {
        showMessage()
    }
}

function addItem () {

    if (theInput.value !== '') {

        localStorage.setItem(theInput.value, "Test")
        results.innerHTML = `local storage Item <span>${theInput.value}</span> Added`
        theInput.value = ''

    }else {
        showMessage()
    }

}

function deleteItem () {
    if (theInput.value !== '') {

        
        if(localStorage.getItem(theInput.value)){

            localStorage.removeItem(theInput.value);
            results.innerHTML = `Local Item Called <span>${theInput.value} Deleted</span>`
            theInput.value = ""
            
        } else {
            
            results.innerHTML = `No Local Item Found With This Name: <span>${theInput.value}</span>`
            theInput.value = ""
        }

    }else {
        showMessage()
    }
}

function deleteAll () {
            if (localStorage.length) {
                localStorage.clear();
                results.innerHTML = `Local Storage Cleared </span>`
                theInput.value = ""
            } else {
                results.innerHTML= `No items to Delete`
            }

}

function showItems () {
    if (localStorage.length) {

        results.innerHTML = ""

        for (let [key , value] of Object.entries(localStorage)) {

            results.innerHTML += `<span class="keys">${key}</span>`

        }

    }else {

        results.innerHTML = `Local Storage is Empty`
    }
}