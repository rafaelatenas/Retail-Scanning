//-- Vista movil --//

//Redireccionar al hacer click en los servicios principales

var Home_Pantry = document.getElementById('home_pantry');
var Retail_Scanning = document.getElementById('scanning');
var Execution = document.getElementById('execution');
var CI = document.getElementById('CI');
var Cexecution = document.getElementById('Cexecution');

Home_Pantry.addEventListener('click', () => {
    window.location.href = "#"
});
Retail_Scanning.addEventListener('click', () => {
    window.location.href = "#"
});
Execution.addEventListener('click', () => {
    window.location.href = "#"
});
CI.addEventListener('click', () => {
    window.location.href = "#"
});
Cexecution.addEventListener('click', () => {
    window.location.href = "#"
});

//--- Botones del Menú Desplegable ---//

var back = document.getElementById('back');
var Gohome = document.getElementById('GOhome');
var config = document.getElementById('config');

back.addEventListener('click', () => {
    window.location.href = "home.html"
});
Gohome.addEventListener('click', () => {
    window.location.href = "home.html"
});
config.addEventListener('click', () => {
    window.location.href = "#"
});

//--- Vista de Escritorio ---//
var menuHP = document.getElementById('menuHP');
var menuRSc = document.getElementById('menuRSc');
var menuEx = document.getElementById('menuEx');
var menuCI = document.getElementById('menuCI');


var counterVal2 = 0;
var updateDisplay2;

function incrementClick2() {
    updateDisplay2 = ++counterVal2;
}

menuHP.addEventListener('click', () => {
    if (updateDisplay2 % 2) {
        blockHP.style.display = "block";
        menuHP.style.transform = "rotate(180deg)"
        menuHP.style.animationName = "none"

    } else {
        document.getElementById('desplegableHP').style.display = "none"
        menuHP.style.transform = "rotate(0deg)"
        menuHP.style.animationName = "pulse"

    }
});
var counterVal1 = 0;
var updateDisplay1;
var blockRSc = document.getElementById('desplegableRSc');
var blockEx = document.getElementById('desplegableEx');
var blockCI = document.getElementById('desplegableCI');
var blockHP = document.getElementById('desplegableHP');

function incrementClick1() {
    updateDisplay1 = ++counterVal1;
}


menuRSc.addEventListener('click', () => {
    if (updateDisplay1 % 2) {
        blockRSc.style.display = "block";
        menuRSc.style.transform = "rotate(180deg)"
        menuRSc.style.animationName = "none"

    } else {
        document.getElementById('desplegableRSc').style.display = "none";
        menuRSc.style.transform = "rotate(0deg)"
        menuRSc.style.animationName = "pulse"

    }
});
var counterVal3 = 0;
var updateDisplay3;

function incrementClick3() {
    updateDisplay3 = ++counterVal3;
}

menuEx.addEventListener('click', () => {

    if (updateDisplay3 % 2) {
        blockEx.style.display = "block";
        menuEx.style.transform = "rotate(180deg)"
        menuEx.style.animationName = "none"

    } else {

        document.getElementById('desplegableEx').style.display = "none";
        menuEx.style.transform = "rotate(0deg)"
        menuEx.style.animationName = "pulse"

    }
})
var counterVal4 = 0;
var updateDisplay4;

function incrementClick4() {
    updateDisplay4 = ++counterVal4;
}
menuCI.addEventListener('click', () => {

    if (updateDisplay4 % 2) {
        blockCI.style.display = "block";
        menuCI.style.transform = "rotate(180deg)"
        menuCI.style.animationName = "none"

    } else {

        document.getElementById('desplegableCI').style.display = "none";
        menuCI.style.transform = "rotate(0deg)"
        menuCI.style.animationName = "pulse"

    }



})

//---Redireccionar a los servicios de cada desplegable ---//

// var ExpressRSC = document.getElementById('ExpressRSc');
// ExpressRSC.href = "/data-shortcut.html"


const banderas = document.getElementById('flags');
const elementos = document.getElementById('elementos');
const elementelementosExecutionos = document.getElementById('elementosExecution');

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async() => {
    try {
        const res = await fetch('pruebajson.json')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
        filtros(data)

    } catch (error) {
        console.log(error)
    }
}
const banderillas = data => {


    console.log(data.RetailScanning)
        //--- Elementos Retail Scanning ---//

    data.RetailScanning.forEach(item => {

        a = document.createElement('a');
        a.classList = "efect"
        a.innerHTML = item.name;
        a.setAttribute("href", `data-shortcut.html?name=${item.url}`);
        banderas.appendChild(a);

        hr = document.createElement('hr');
        banderas.appendChild(hr);

        let m = item.reporteuno.length
        for (let i = 0; i < m; i++) {
            a = document.createElement('a');
            a.classList = "efect"
            a.innerHTML = item.reporteuno[i].name;
            a.setAttribute("href", `data.html?name=${item.reporteuno[i].url}`);
            banderas.appendChild(a);
        }

        hr = document.createElement('hr');
        banderas.appendChild(hr);

        let n = item.reportedos.length
        for (let i = 0; i < n; i++) {
            a = document.createElement('a');
            a.classList = "efect"
            a.innerHTML = item.reportedos[i].name;
            a.setAttribute("href", `data.html?name=${item.reportedos[i].url}`);
            banderas.appendChild(a);
        }
        hr = document.createElement('hr');
        banderas.appendChild(hr);

        let b = item.reportedos.length
        for (let i = 0; i < b; i++) {
            a = document.createElement('a');
            a.classList = "efect"
            a.innerHTML = item.reportetres[i].name;
            a.setAttribute("href", `data.html?name=${item.reportetres[i].url}`);
            banderas.appendChild(a);
        }
        hr = document.createElement('hr');
        banderas.appendChild(hr);

        let o = item.reportetres.length
        for (let i = 0; i < o; i++) {
            a = document.createElement('a');
            a.classList = "efect"
            a.innerHTML = item.reportecuatro[i].name;
            a.setAttribute("href", `data.html?name=${item.reportecuatro[i].url}`);
            banderas.appendChild(a);
        }
        hr = document.createElement('hr');
        banderas.appendChild(hr);

        //--- Elementos Home Pantry ---//

        a

    })

    data.HomePantry.forEach(item => {

        a = document.createElement('a');
        a.classList = "efect"
        a.innerHTML = item.name;
        a.setAttribute("href", `data-shortcut.html?name=${item.url}`);
        elementos.appendChild(a);

        hr = document.createElement('hr');
        elementos.appendChild(hr);

        let m = item.reporteuno.length
        for (let i = 0; i < m; i++) {
            a = document.createElement('a');
            a.classList = "efect"
            a.innerHTML = item.reporteuno[i].name;
            a.setAttribute("href", `data.html?name=${item.reporteuno[i].url}`);
            elementos.appendChild(a);
        }

        hr = document.createElement('hr');
        elementos.appendChild(hr);
        let f = item.reporteuno.length
        for (let i = 0; i < f; i++) {
            a = document.createElement('a');
            a.classList = "efect"
            a.innerHTML = item.reportedos[i].name;
            a.setAttribute("href", `data.html?name=${item.reportedos[i].url}`);
            elementos.appendChild(a);
        }

        hr = document.createElement('hr');
        elementos.appendChild(hr);
    })

    //--- Elementos Execution ---//

    data.Execution.forEach(item => {
        let e = item.reporteuno.length
        for (let i = 0; i < e; i++) {
            a = document.createElement('a');
            a.classList = "efect"
            a.innerHTML = item.reporteuno[i].principal;
            a.setAttribute("href", `data.html?name=${item.reporteuno[i].url}`);
            elementosExecution.appendChild(a);
        }

        hr = document.createElement('hr');
        elementosExecution.appendChild(hr);

        let x = item.reporteuno.length
        for (let i = 0; i < x; i++) {
            a = document.createElement('a');
            a.classList = "efect"
            a.innerHTML = item.reportedos[i].principal;
            a.setAttribute("href", `data.html?name=${item.reportedos[i].url}`);
            elementosExecution.appendChild(a);
        }

        hr = document.createElement('hr');
        elementosExecution.appendChild(hr);
    })
}