//   //-------Tittle of Services Page---------//

// Valor corresponderá al nombre del servicio obtenido mediante la API, los ejemplos posibles son: "Retail Services, Retail Scanning, Home Pantry"
const data_of_tittle = "Servicio proporcionado por la API";

window.document.title = ('|Atenas|' + ' ' + data_of_tittle);



var select_options = document.getElementById('select-options'); //-- Card de selección de opciones --//

Tittle_Options = document.createElement('h3');
Tittle_Options.innerHTML = 'REPORTE'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Tittle_Options.id = 'tittle-services-options'
select_options.appendChild(Tittle_Options);

container_Options = document.createElement('div');
container_Options.id = 'services-options'
select_options.appendChild(container_Options);

var services_options = document.getElementById('services-options');

Options = document.createElement('button');
Options.innerHTML = 'SEMANAL'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Options.id = 'option-1'
Options.className = 'options'
services_options.appendChild(Options);

Options = document.createElement('button');
Options.innerHTML = 'MENSUAL'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Options.id = 'option-2'
Options.className = 'options'
services_options.appendChild(Options);

Options = document.createElement('button');
Options.innerHTML = 'TRIMESTAL'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Options.id = 'option-3'
Options.className = 'options'
services_options.appendChild(Options);

Options = document.createElement('button');
Options.innerHTML = 'SEMESTRAL'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Options.id = 'option-4'
Options.className = 'options'

services_options.appendChild(Options);


var menu = document.getElementById('menu');
var cancel_menu = document.getElementById('cancel-menu');

var menu_inter = document.getElementById('menu-int');
var change = false;
menu.addEventListener('click', () => {
    if (!change) {
        cancel_menu.style.visibility = "visible";
        menu.style.visibility = "hidden";
        document.getElementById('menu-des').style.left = ("0%");
    }
})

cancel_menu.addEventListener('click', () => {
    console.log('si')
    if (!change) {
        document.getElementById('menu-des').style.left = ("-80%")

        cancel_menu.style.visibility = "hidden";
        menu.style.visibility = "visible";
    }
})



const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})


const fetchData = async() => {
    try {
        const res = await fetch('pruebajson.json')
        var data = await res.json()

        console.log(data.RetailScanning[0])

        const valor1 = (data.RetailScanning[0]);
        console.log(valor1.reportedos[0].url)
        const filtroData1 = data.RetailScanning.filter(data => valor1.reporteuno[0].url === params);
        banderilla1(filtroData1);

        const filtroData2 = data.RetailScanning.filter(data => valor1.reportedos[0].url === params);

        banderilla2(filtroData2);


        // const filtroData3 = data.Execution.filter(data => valor3 === params)
        // banderilla3(filtroData3);


    } catch (error) {
        console.log(error)
    }

}
const banderilla1 = data => {
    console.log(data[0].reporteuno[0].url)
    if (data[0].reporteuno[0].url === params) {
        console.log(data[0].reporteuno[0].url)
        document.getElementById('option-1').style.background = "#F6B232"
    }
}

const banderilla2 = data => {
    console.log(data[0].reportedos[0].url)
    if (data[0].reportedos.url === params) {
        alert('si')
        document.getElementById('option-2').style.background = "#F6B232"
    }
}