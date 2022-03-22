//   //-------Tittle of Services Page---------//

// Valor corresponderá al nombre del servicio obtenido mediante la API, los ejemplos posibles son: "Retail Services, Retail Scanning, Home Pantry"
const data_of_tittle = "Servicio proporcionado por la API";

window.document.title = ('|Atenas|' + ' ' + data_of_tittle);

//-- -- --Interactive drop - down menu button

var menu = document.getElementById('menu');
var cancel_menu = document.getElementById('cancel-menu');

var change = false;
menu.addEventListener('click', () => {
    if (!change) {
        cancel_menu.style.visibility = "visible";
        menu.style.visibility = "hidden";
        document.getElementById('menu-des').style.left = ("0%");
    }
})

cancel_menu.addEventListener('click', () => {
        if (!change) {
            document.getElementById('menu-des').style.left = ("-82%")

            cancel_menu.style.visibility = "hidden";
            menu.style.visibility = "visible";
        }
    })
    //---- Alert Temporal de disposición de servicios----
var alert_message = document.getElementById('alert-message');

function event_temporal() {
    addEventListener('click', () => {
        alert_message.style.visibility = 'visible'
    })

}
//-- -- -- -- --matchMedia

var boton = document.getElementById('boton'); //-- Boton Desplegable movil

var active_modal = document.getElementById('Icon-Top_SKU'); //--Ejemplo de activador Modal exclusive desktop
var close_modal = document.getElementById('close-modal'); //-- Boton de cerrar modal exclusivo desktop
var popup = document.getElementById('popup'); //--Modal exclusive desktop

var select_options = document.getElementById('select-options'); //-- Card de selección de opciones --//
if (window.matchMedia("(max-width: 991px)").matches) {

    // document.getElementById('buttons-complementary').style.visibility = "hidden"

    //-- --Drop down bar MOVIL
    var despliegue = false;

    boton.addEventListener("click", function() {
        if (!despliegue) {
            document.getElementById('desplegable').style.top = "0%";

            despliegue = true;
        } else {
            document.getElementById('desplegable').style.top = "50%";
            despliegue = false;
        }
    });


} else {
    document.getElementById('desplegable').style.top = "";

}
const box_icon1 = document.getElementById('element-icon-uno');
const box_icon2 = document.getElementById('element-icon-dos');
const box_icon3 = document.getElementById('element-icon-cuatro');
const box_icon4 = document.getElementById('element-icon-tres');

const box_info1 = document.getElementById('infouno');
const box_info2 = document.getElementById('infodos');
const box_info3 = document.getElementById('infotres');
const box_info4 = document.getElementById('infocuatro');


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

        const valor1 = (data.RetailScanning[0].url);
        const valor2 = (data.HomePantry[0].url);
        // const valor3 = (data.Execution[0].url);
        console.log(valor2)
        const filtroData1 = data.RetailScanning.filter(data => valor1 === params);
        banderilla1(filtroData1);

        const filtroData2 = data.HomePantry.filter(data => valor2 === params);
        banderilla2(filtroData2);
        console.log(filtroData2)

        // const filtroData3 = data.Execution.filter(data => valor3 === params)
        // banderilla3(filtroData3);


    } catch (error) {
        console.log(error)
    }

}

//--- Elemetos Retail Scanning ---//
const banderilla1 = data => {

    let elementos_share = '';
    let elementos_distribucion = '';
    let elementos_ventas = '';
    let elementos_precio = '';
    let elementos_infouno = '';
    let elementos_infodos = '';
    let elementos_infotres = '';
    let elementos_infocuatro = '';
    data.forEach(item => {


        elementos_share +=

            `<a href="nuevo-pais.html?name=${item.accesorapido[0].acceso1[0].url}" class="botones-1-3-4">
                <p>${item.accesorapido[0].acceso1[0].name}</p>
                <img src="${item.accesorapido[0].acceso1[0].img}"" alt="${item.accesorapido[0].acceso1[0].name}">
                
            </a>
            `
    });
    box_icon1.innerHTML = elementos_share;


    data.forEach(item => {
        elementos_distribucion +=

            `<a href="nuevo-pais.html?name=${item.accesorapido[0].acceso2[0].url}" class="botones-2">
                <p>${item.accesorapido[0].acceso2[0].name}</p>
                <img src="${item.accesorapido[0].acceso2[0].img}"" alt="${item.accesorapido[0].acceso2[0].name}">
                
            </a>
            `
    });
    box_icon2.innerHTML = elementos_distribucion;


    data.forEach(item => {
        elementos_ventas +=
            `<a href="nuevo-pais.html?name=${item.accesorapido[0].acceso3[0].url}" class="botones-1-3-4">
                <p>${item.accesorapido[0].acceso3[0].name}</p>
                <img src="${item.accesorapido[0].acceso3[0].img}"" alt="${item.accesorapido[0].acceso3[0].name}">
                
            </a>
             `
    });
    box_icon3.innerHTML = elementos_ventas;


    data.forEach(item => {
        elementos_precio +=
            `<a href="nuevo-pais.html?name=${item.accesorapido[0].acceso4[0].url}" class="botones-1-3-4">
                <p>${item.accesorapido[0].acceso4[0].name}</p>
                <img src="${item.accesorapido[0].acceso4[0].img}"" alt="${item.accesorapido[0].acceso4[0].name}">
                
            </a>
            `
    });
    box_icon4.innerHTML = elementos_precio


    data.forEach(item => {
        elementos_infouno +=
            `
            <iframe src="${item.favicon[0].img}" frameborder="0"></iframe>
            `
    });
    box_info1.innerHTML = elementos_infouno


    data.forEach(item => {
        elementos_infodos +=
            `
        <iframe src="${item.favicon[0].img}" frameborder="0"></iframe>
        `
    });
    box_info2.innerHTML = elementos_infodos


    data.forEach(item => {
        elementos_infotres +=
            `
        <iframe src="${item.favicon[0].img}" frameborder="0"></iframe>
        `
    });
    box_info3.innerHTML = elementos_infotres

    data.forEach(item => {
        elementos_infocuatro +=
            `
        <iframe src="${item.favicon[0].img}" frameborder="0"></iframe>
        `
    });
    box_info4.innerHTML = elementos_infocuatro
}


//--- Elementos Home Pantry ---//

const banderilla2 = data => {
    console.log(data)
    if (data[0].url === params) {
        console.log('si')
        let elementos_penetracion = '';
        let elementos_cuota = '';
        let elementos_Precio = '';
        let elementos_recompra = '';
        let elementos_infouno = '';
        let elementos_infodos = '';
        let elementos_infotres = '';
        let elementos_infocuatro = '';
        data.forEach(item => {
            console.log(item)

            elementos_penetracion +=

                `<a href="nuevo-pais.html?name=${item.accesorapido[0].acceso1[0].url}" class="botones-1-3-4">
                  <p>${item.accesorapido[0].acceso1[0].name}</p>
                  <img src="${item.accesorapido[0].acceso1[0].img}"" alt="${item.accesorapido[0].acceso1[0].name}">
              </a>
              `
        });
        box_icon1.innerHTML = elementos_penetracion;

        data.forEach(item => {

            elementos_cuota +=


                `<a href="nuevo-pais.html?name=${item.accesorapido[0].acceso2[0].url}" class="botones-2">
                  <p>${item.accesorapido[0].acceso2[0].name}</p>
                  <img src="${item.accesorapido[0].acceso2[0].img}"" alt="${item.accesorapido[0].acceso2[0].name}">
              </a>
                `
        });
        box_icon2.innerHTML = elementos_cuota;

        data.forEach(item => {

            elementos_Precio +=

                `<a href="nuevo-pais.html?name=${item.accesorapido[0].acceso3[0].url}" class="botones-1-3-4">
                  <p>${item.accesorapido[0].acceso3[0].name}</p>
                  <img src="${item.accesorapido[0].acceso3[0].img}"" alt="${item.accesorapido[0].acceso3[0].name}">
              </a>
                `

        });
        box_icon3.innerHTML = elementos_Precio;

        data.forEach(item => {

            elementos_recompra +=

                `<a href="nuevo-pais.html?name=${item.accesorapido[0].acceso4[0].url}" class="botones-1-3-4">
                  <p>${item.accesorapido[0].acceso4[0].name}</p>
                  <img src="${item.accesorapido[0].acceso4[0].img}"" alt="${item.accesorapido[0].acceso4[0].name}">
                </a>
              `

        });
        box_icon4.innerHTML = elementos_recompra
        data.forEach(item => {
            elementos_infouno +=
                `
                <iframe src="${item.favicon[0].img}" frameborder="0"></iframe>
                `
        });
        box_info1.innerHTML = elementos_infouno


        data.forEach(item => {
            elementos_infodos +=
                `
            <iframe src="${item.favicon[0].img}" frameborder="0"></iframe>
            `
        });
        box_info2.innerHTML = elementos_infodos


        data.forEach(item => {
            elementos_infotres +=
                `
            <iframe src="${item.favicon[0].img}" frameborder="0"></iframe>
            `
        });
        box_info3.innerHTML = elementos_infotres

        data.forEach(item => {
            elementos_infocuatro +=
                `
            <iframe src="${item.favicon[0].img}" frameborder="0"></iframe>
            `
        });
        box_info4.innerHTML = elementos_infocuatro

    }
}

//--- Evento Modal Display ---//

box_info1.addEventListener('click', () => {
    console.log('si')
})