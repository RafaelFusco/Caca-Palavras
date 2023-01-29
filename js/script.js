let respostas = document.querySelectorAll("#resposta")
let letras = document.querySelectorAll("#letra")
let list = ['L', 'W', 'E', 'M', 'O', 'L']
let startButton = document.getElementById('comeca')
let checkButton = document.querySelector('.checar')


function shuffleArray(arr) {

for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));  
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr;
}

function start() {

    displayLetras()

    shuffleArray(list)
    
    letras[0].value = `${list[0]}`
    letras[1].value = `${list[1]}`
    letras[2].value = `${list[2]}`
    letras[3].value = `${list[3]}`
    letras[4].value = `${list[4]}`
    letras[5].value = `${list[5]}`

    clicked()

    startButton.style.display = 'none'
    
}
function clicked() {

    letras.forEach(element => {
        element.onclick = function () {
            if (respostas[0].value === "." ) {
                respostas[0].value = `${element.value}` 
                respostas[1].value = "."
                element.style.display = "none"
                checkButton.style.backgroundColor = 'white'
    
            } else if (respostas[1].value === ".") {
                respostas[1].value = `${element.value}`
                respostas[2].value = "."
                element.style.display = "none"
                checkButton.style.backgroundColor = 'white'
    
            } else if (respostas[2].value === ".") {
                respostas[2].value = `${element.value}`
                respostas[3].value = "."
                element.style.display = "none"
                checkButton.style.backgroundColor = 'white'
    
            } else if (respostas[3].value === ".") {
                respostas[3].value = `${element.value}`
                respostas[4].value = "."
                element.style.display = "none"
                checkButton.style.backgroundColor = 'white'
    
            } else if (respostas[4].value === ".") {
                respostas[4].value = `${element.value}`
                respostas[5].value = "."
                element.style.display = "none"
                checkButton.style.backgroundColor = 'white'
    
            } else if (respostas[5].value === ".") {
                respostas[5].value = `${element.value}`
                element.style.display = "none"
                checkButton.style.backgroundColor = 'white'
            }
        }
    })
}

function apagar() {

    respostas[0].value = "."
    respostas[1].value = ""
    respostas[2].value = ""
    respostas[3].value = ""
    respostas[4].value = ""
    respostas[5].value = ""

    letras.forEach(element => {
        element.style.display = "flex"
    });
    checkButton.style.backgroundColor = 'white'
}

function check() {
    
    if (respostas[0].value == 'M' && respostas[1].value == 'E' && respostas[2].value == 'L' && respostas[3].value == 'L' && respostas[4].value == 'O' && respostas[5].value == 'W') {
        let mellow = document.getElementById("mellow")
        mellow.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);
        

    } else if (respostas[0].value == 'E' && respostas[1].value == 'L' && respostas[2].value == 'M' && respostas[3].value == 'O' && respostas[4].value == 'L' && respostas[5].value == 'W') {
        let elmolw = document.getElementById("elmolw")
        elmolw.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'M' && respostas[1].value == 'O' && respostas[2].value == 'W' && respostas[3].value == '.' && respostas[4].value == '' && respostas[5].value == '') {
        let mow = document.getElementById("mow")
        mow.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'M' && respostas[1].value == 'E' && respostas[2].value == 'W' && respostas[3].value == '.' && respostas[4].value == '' && respostas[5].value == '') {
        let mew = document.getElementById("mew")
        mew.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'L' && respostas[1].value == 'O' && respostas[2].value == 'W' && respostas[3].value == '.' && respostas[4].value == '' && respostas[5].value == '') {
        let low = document.getElementById("low")
        low.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'W' && respostas[1].value == 'O' && respostas[2].value == 'E' && respostas[3].value == '.' && respostas[4].value == '' && respostas[5].value == '') {
        let woe = document.getElementById("woe")
        woe.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'O' && respostas[1].value == 'W' && respostas[2].value == 'L' && respostas[3].value == '.' && respostas[4].value == '' && respostas[5].value == '') {
        let owl = document.getElementById("owl")
        owl.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'E' && respostas[1].value == 'L' && respostas[2].value == 'M' && respostas[3].value == '.' && respostas[4].value == '' && respostas[5].value == '') {
        let elm = document.getElementById("elm")
        elm.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'O' && respostas[1].value == 'W' && respostas[2].value == 'E' && respostas[3].value == '.' && respostas[4].value == '' && respostas[5].value == '') {
        let owe = document.getElementById("owe")
        owe.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);
    
    } else if (respostas[0].value == 'M' && respostas[1].value == 'E' && respostas[2].value == 'W' && respostas[3].value == 'L' && respostas[4].value == '.' && respostas[5].value == '') {
        let mewl = document.getElementById("mewl")
        mewl.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'W' && respostas[1].value == 'E' && respostas[2].value == 'L' && respostas[3].value == 'L' && respostas[4].value == '.' && respostas[5].value == '') {
        let well = document.getElementById("well")
        well.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'M' && respostas[1].value == 'E' && respostas[2].value == 'O' && respostas[3].value == 'W' && respostas[4].value == '.' && respostas[5].value == '') {
        let meow = document.getElementById("meow")
        meow.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'M' && respostas[1].value == 'O' && respostas[2].value == 'L' && respostas[3].value == 'L' && respostas[4].value == '.' && respostas[5].value == '') {
        let moll = document.getElementById("moll")
        moll.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else if (respostas[0].value == 'M' && respostas[1].value == 'O' && respostas[2].value == 'L' && respostas[3].value == 'E' && respostas[4].value == '.' && respostas[5].value == '') {
        let mole = document.getElementById("mole")
        mole.style.visibility = "visible"
        checkButton.style.backgroundColor = 'green'
        setTimeout(() => {
            apagar() 
        }, 800);

    } else {
        checkButton.style.backgroundColor = 'red'
        setTimeout(() => {
            apagar() 
        }, 1000);
    }
}
function displayLetras() {
    letras.forEach(element => {
        element.style.display = 'flex'
        element.style.height = '4rem'
    });
    let buttons = document.querySelector('.buttons')
    buttons.style.display = 'flex'
}