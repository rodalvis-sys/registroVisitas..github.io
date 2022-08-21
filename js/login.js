// Nombre: Enger Rodalvis Guzmán RIvas
//Matricula: 2019-8225

function entrar() {
    var user, passw;

    user = document.getElementById("user").value;
    passw = document.getElementById("passw").value;

    if (user == "20198225" && passw == "8225") {
        window.location = "index.html";
    }
    else {
        alert("Algun dato incorrecto")
    }
}