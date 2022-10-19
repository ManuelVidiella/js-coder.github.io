try{
    const nombreAnterior = document.querySelector('#nombre')
    nombreAnterior.value = localStorage.Nombre.replaceAll('"','')
    const telefonoAnterior = document.querySelector('#numero')
    telefonoAnterior.value = localStorage.Telefono.replaceAll('"','')
    const emailAnterior = document.querySelector('#email')
    emailAnterior.value = localStorage.email.replaceAll('"','')
    const direccionAnterior = document.querySelector('#direccion')
    direccionAnterior.value = localStorage.direccion.replaceAll('"','')
    const pedidoAnterior = document.querySelector('#pedido')
    pedidoAnterior.value = localStorage.pedido.replaceAll('"','')
} catch{}



class Cliente {
    constructor(nombre, telefono, email, direccion, pedido) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
        this.pedido = pedido;
    }
}


let boton = document.getElementById("enviarInfo");

boton.addEventListener("click", cargarCliente);


function cargarCliente() {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("numero").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let pedido = document.getElementById("pedido").value;
    let cliente1 = new Cliente(nombre, telefono, email, direccion, pedido);
    notificacion(cliente1);
    if (cliente1.nombre && cliente1.telefono && cliente1.direccion && cliente1.pedido) {
        storageCliente(cliente1);
    }
    }


function storageCliente(cliente) {
    const nombreStr = JSON.stringify(cliente.nombre)
    localStorage.setItem("Nombre", nombreStr)
    const telefonoStr = JSON.stringify(cliente.telefono)
    localStorage.setItem("Telefono", telefonoStr)
    const emailStr = JSON.stringify(cliente.email)
    localStorage.setItem("email", emailStr)
    const direccionStr = JSON.stringify(cliente.direccion)
    localStorage.setItem("direccion", direccionStr)
    const pedidoStr = JSON.stringify(cliente.pedido)
    localStorage.setItem("pedido", pedidoStr)
}

function notificacion(cliente) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    if (cliente.nombre && cliente.telefono && cliente.direccion && cliente.pedido) {
        Toast.fire({
            icon: 'success',
            title: 'Información cargada exitosamente, nos estaremos comunicando a la brevedad'
        })
    }
    else {
        Toast.fire({
            icon: 'error',
            title: 'Faltan campos por completar'
        })
    }
}

