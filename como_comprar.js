function validarEdad() {
    const edad = parseInt(document.getElementById('edad').value);

    if (edad >= 18) {
        Swal.fire({
            title: "Dolar YA",
            text: "Eres mayor de edad, puedes operar",
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Dolar YA",
            text: "Eres menor de edad, no puedes operar",
            icon: "error"
        });
    }
}

document.getElementById("Validar").addEventListener("click", validarEdad);
