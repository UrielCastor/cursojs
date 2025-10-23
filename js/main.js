const turnos = [];
function agregarTurno(nombre, hora) {
    const turno = `${nombre} - ${hora}`;
    turnos.push(turno);
    alert(`Turno agregado: ${turno}`);
}
function mostrarTurnos() {
    if (turnos.length === 0) {
        alert("No hay turnos agendados.");
    } else {
        let lista = "Turnos agendados:\n";
        for (const turno of turnos) {
            lista += `- ${turno}\n`;
        }
        alert(lista);
    }
}
let seguir = true;

while (seguir) {
    const opcion = prompt("Ingrese una opción:\n1 - Agregar turno\n2 - Mostrar turnos\n3 - Salir");

    if (opcion === null || opcion === "3") {
        seguir = false;
        alert("Gracias por usar el agendador.");
    } else if (opcion === "1") {
        const nombre = prompt("Ingrese el nombre del paciente:");
        const hora = prompt("Ingrese la hora del turno:");
        if (nombre && hora) {
            agregarTurno(nombre, hora);
        } else {
            alert("Debe ingresar nombre y hora válidos.");
        }
    } else if (opcion === "2") {
        mostrarTurnos();
    } else {
        alert("Opción inválida, ingrese 1, 2 o 3.");
    }
}
