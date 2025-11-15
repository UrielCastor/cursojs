///////////////////////////Cambio de titulo dinamico///////////////////////////////////////////////////////////////////////////
//se pide el contenido del elemento y se guarda en una constante
const tituloDinamico = document.getElementById("tituloUsuario")
//se solicita el usuario almacenado en localstorage y se guarda en una constante para exibirlo en el titulo
const nombreUsuario = JSON.parse(localStorage.getItem("usuario"))
// se cambia el titulo dinamicamente para que muestre el nombre de usuario guardado previamente
tituloDinamico.innerText = "Bienvenido " + nombreUsuario;
/////////////////////////// fin Cambio de titulo dinamico///////////////////////////////////////////////////////////////////////////
///////////////////////////Simulacion de creditos///////////////////////////////////////////////////////////////////////////
///se pide el elemento boton via id
const simularCredito = document.getElementById("simularCredito")
//Funcion constructora
class creditoS {
    static id = 0
    constructor(importe, meses,) {
        this.id = ++creditoS.id,
            this.importe = importe,
            this.meses = meses
    }
}
//array vacio    
let creditosSimulados = []
const cargarCreditoSimulado = () => {
    let cargaImporte = document.getElementById("cargaImporte")
    let cargaMeses = document.getElementById("cargaMeses")
    //se crea el array vacio
    const credito = new creditoS(cargaImporte.value, cargaMeses.value,)
    creditosSimulados.push(credito)
    let mostraCsimulado = document.getElementById("cardSimulacion")
    mostraCsimulado.innerHTML = ""
    creditosSimulados.forEach(creditosSimulado => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
                    <h2>Simulacion de Prestamo Personal</h2>
                    <h3 class="card-title">Monto Solicitado $: ${creditosSimulado.importe}</h3>
                    <h3 class="card-title">Pago de $: ${creditosSimulado.importe / creditosSimulado.meses}</h3>
                    <h4>Meses : ${creditosSimulado.meses}</h4>`
        mostraCsimulado.appendChild(card)

    })
    // se declara un onclick con una funcion para restablecer los input y el card   
    const cerrarSimulador = document.getElementById("cerrarCimulador")
    cerrarSimulador.onclick = () => {
        alert("Simulador Cerrado")
        creditosSimulados.length = 0
        document.getElementById("cardSimulacion").innerHTML = ""
        cargaImporte.value = ""
        cargaMeses.value = "Cuotas"
    }
}
// se declara el evento onclick
simularCredito.onclick = () => {

    cargarCreditoSimulado()

}

/////////////////////////// fin Simulacion de prestamos///////////////////////////////////////////////////////////////////////////
///////////////////////////Solicitud de creditos///////////////////////////////////////////////////////////////////////////
const sacarCredito = document.getElementById("solicitarboton")


//se crea la funcion constructora

class CreditoSolicitar {
    static id = 0;
    constructor(importe, meses, fecha,) {
        this.id = ++CreditoSolicitar.id
        this.importe = importe,
            this.meses = meses,
            this.fecha = fecha
    }
}
//se crea el array vacio y la funcion para cargar el credito y guardarlo en localhost
const creditoSacado = JSON.parse(localStorage.getItem("creditoSacado")) || []
const cargarCreditoSacado = () => {
    let cargaImporte = document.getElementById("cargaImporteCargado")
    let cargarMeses = document.getElementById("cargaMesesCargado")
    let cargarFecha = document.getElementById("cargaFechaCargado")
    const CreditoSolicita = new CreditoSolicitar(cargaImporte.value, cargarMeses.value, cargarFecha.value)
    creditoSacado.push(CreditoSolicita)
    const creditoJSon = JSON.stringify(creditoSacado)
    localStorage.setItem("creditoSacado", creditoJSon)

    // se declara un onclick con una funcion para restablecer los input y el card   
    const cerrarSolicitud = document.getElementById("cerrarSolicitud")
    cerrarSolicitud.onclick = () => {
        alert("Simulador Cerrado")
        cargaImporte.value = ""
        cargarMeses.value = "Cuotas"
        cargarFecha.value = "date"
    }
    let alertas = document.getElementById("alertaOtorgamiento")
    let alert = document.createElement("div")
    alert.className = "alert alert-success"
    alert.innerHTML = ` Felicidades Su Credito Fue Otorgado.`
    alertas.appendChild(alert)
}
//se llama la funcion con el evento onclick
sacarCredito.onclick = () => {
    cargarCreditoSacado()

}
/////////////////////////// fin Solicitud de prestamos///////////////////////////////////////////////////////////////////////////
///////////////////////////Vizualisacion de creditos///////////////////////////////////////////////////////////////////////////
const modalVisualizacion = document.getElementById("creditosOtorgados")
const creditosAprovados = JSON.parse(localStorage.getItem("creditoSacado"))
const tituloModal = document.getElementById("creditosSolicitadosPor")
tituloModal.innerText = "Creditos Solicitados Por :" + nombreUsuario;
let mostrarCOtorgado = document.getElementById("creditosOtorgados")
mostrarCOtorgado.innerHTML = ""
creditosAprovados.forEach(creditosAprovados => {
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
                    <h2>Prestamos Personales</h2>
                    <h5 class="card-title">Monto Solicitado $: ${creditosAprovados.importe}</h5>
                    <h5 class="card-title">Pago Mensual $: ${creditosAprovados.importe / creditosAprovados.meses}</h5>
                    <h5>Meses : ${creditosAprovados.meses}</h5>
                    <h5>Fecha de Emision : ${creditosAprovados.fecha}</h5>`
    mostrarCOtorgado.appendChild(card)

})
/////////////////////////// fin Vizualisacion de prestamos///////////////////////////////////////////////////////////////////////////
/////////////////////////// Borrado de prestamos///////////////////////////////////////////////////////////////////////////
const borrarPrestamo = document.getElementById("borrarPrestamo")
borrarPrestamo.onclick = () => {
    localStorage.removeItem("creditoSacado")
}
///////////////////////////Fin Borrado de prestamos///////////////////////////////////////////////////////////////////////////
/////////////////////////// Busqueda de prestamos///////////////////////////////////////////////////////////////////////////
let inputbuscar = document.getElementById("inputbuscar")
inputbuscar.onchange = () => {
    const busqueda = creditosAprovados.filter(creditosAprovado => creditosAprovado.importe === inputbuscar.value)
let mostrarCOtorgado = document.getElementById("buscrcreditos")
mostrarCOtorgado.innerHTML = ""
busqueda.forEach(creditosAprovados => {
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
                    <h2>Prestamos Personales</h2>
                    <h5 class="card-title">Monto Solicitado $: ${creditosAprovados.importe}</h5>
                    <h5 class="card-title">Pago Mensual $: ${creditosAprovados.importe / creditosAprovados.meses}</h5>
                    <h5>Meses : ${creditosAprovados.meses}</h5>
                    <h5>Fecha de Emision : ${creditosAprovados.fecha}</h5>`
    mostrarCOtorgado.appendChild(card)
})
}
/////////////////////////// Fin busqeuda de prestamos///////////////////////////////////////////////////////////////////////////
