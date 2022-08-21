// Nombre: Enger Rodalvis Guzmán RIvas
//Matricula: 2019-8225

let nuevalista = [];
cargar();
let cambio = false;

document.getElementById('tr').style.display = "none";
document.getElementById('boton').style.display = "none";
document.getElementById('boton2').style.display = "none";
const listaCasos = document.getElementById('lista');

function mostrarFormulario(){
    document.getElementById('tr').style.display = "flex";
    document.getElementById('boton').style.display = "flex";
}

function limpiar(){
    document.querySelector("#hora").value = "";
   document.querySelector("#nombre").value = "";
   document.querySelector("#apellido").value = "";
}

function agregar(){

    SHORA = document.querySelector("#hora").value,
    SNOMBRE = document.querySelector("#nombre").value,
    SAPELLIDO = document.querySelector("#apellido").value,
   
   agregarVisitantes(SHORA, SNOMBRE, SAPELLIDO);

    document.getElementById('tr').style.display = "none";
    document.getElementById('boton').style.display = "none";
    limpiar();

    
   
}

function agregarVisitantes(SHORA, SNOMBRE, SAPELLIDO){
   
    nuevoVisitante = {
        hora: SHORA,
        nombre: SNOMBRE,
        apellido: SAPELLIDO
   }
   console.log(nuevoVisitante);
   nuevalista.push(nuevoVisitante);
   localListaVisitante(nuevalista);

}

function localListaVisitante(slista){
    localStorage.setItem('localListaVisitante', JSON.stringify(slista));
    cargar();
}
function cargarcuerpo(){
    var listalm = localStorage.getItem('localListaVisitante');
    if (listalm == null) {
        nuevalista = [];
    }else{
        nuevalista = JSON.parse(listalm)
    }
    return nuevalista;
}



function cargar(){
    let listar = cargarcuerpo();
    let cuerpo = document.querySelector('#cuerpo'); 
    cuerpo.innerHTML = '';

    for(var i = 0; i < listar.length; i++){
        
        var row = cuerpo.insertRow(i),
         fcell = row.insertCell(0),
         tcell = row.insertCell(1),
         tCcell = row.insertCell(2);
         var btcell = row.insertCell(3);
         btcell.innerHTML = "<button onclick='edit(this)'>Actualizar</button>"+"<button onclick=''>Borrar</button>"

         

         fcell.innerHTML = listar[i].hora;
         tcell.innerHTML = listar[i].nombre;
         tCcell.innerHTML = listar[i].apellido;

        cuerpo.appendChild(row);
    }
            
}

function edit(td){

        cambio = true;
   
        selectedRow = td.parentElement.parentElement;
        document.getElementById("hora").value = selectedRow.cells[0].innerHTML;
        document.getElementById("nombre").value= selectedRow.cells[1].innerHTML;
        document.getElementById("apellido").value= selectedRow.cells[2].innerHTML;

        document.getElementById('tr').style.display = "flex";
        document.getElementById('boton2').style.display = "flex";

}

const Actualizar = (pr) =>{
    let indexList;
        nuevalista.forEach((elemento, index) => {
            if(elemento.pr === pr){
                indexList = index;
            }
        });
    nuevalista[indexList].hora = document.querySelector("#hora").value;
    nuevalista[indexList].nombre = document.querySelector("#nombre").value;
    nuevalista[indexList].apellido = document.querySelector("#apellido").value;

    localListaVisitante(nuevalista);
    limpiar();  
    document.getElementById('tr').style.display = "none";
    document.getElementById('boton2').style.display = "none";

    }

    const borrarLS = (pr) => {
        //console.log(pr)
        let indexList;
        nuevalista.forEach((elemento, index) => {
            if(elemento.pr === pr){
                indexList = index;
            }
        });

        nuevalista.splice(indexList, 1);
        localListaVisitante(nuevalista);
    }

    listaCasos.addEventListener('click', (e) => {
        e.preventDefault();
        //console.log(e)
        
        

        if(e.target.innerHTML === 'Actualizar' || e.target.innerHTML === 'Borrar'){
            console.log("Funciona")
            let seleccionText = e.path[2].childNodes[0].childNodes[0].data
            if(e.target.innerHTML === 'Borrar'){
                borrarLS(seleccionText);
            }
            if(e.target.innerHTML === 'Actualizar'){
                Actualizar(seleccionText)
            }
        }
    })
    
    function salir() {

        if(confirm("Seguro desea salir")){
            window.location = "index.html";
        }
        
    }