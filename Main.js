var clientes = [];
var trabajadores = [];
var consultas = [];
function crearCliente(){
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastname').value;
    let numeroTel = document.getElementById('contacto').value;
    let numeroNota = document.getElementById('cita').value;
    let tiempoTrans = document.getElementById('lapso').value;
    let contactoEme = document.getElementById('emergencia').value;
    let cliente = clientes[numeroTel,numeroNota,tiempoTrans,contactoEme,nombre,apellido];
    let c1 = new Cliente(numeroTel,numeroNota,tiempoTrans,contactoEme,nombre,apellido,);
    clientes.push(c1);
    alert("Se Registro Cliente");
    document.getElementById('contacto').value = ''
}

function creartrabajador(){
  
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastname').value;
    let horario = document.getElementById('tiempo').value;
    let reparacion_realizada = document.getElementById('arreglado').value;
    let experiencia_Lab = document.getElementById('habilidad').value;
    let estudios = document.getElementById('formacion').value;
    let trabajador = trabajadores [horario,reparacion_realizada,experiencia_Lab,estudios,nombre,apellido];
    let t1 = new Trabajador(horario,reparacion_realizada,experiencia_Lab,estudios,nombre,apellido,);
    trabajadores.push(t1);
    alert("Se Registro Trabajador");
    
 
}
function GeneralConsulta(){
    let motivo = document.getElementById('causa').value;
    let hora_entrada = document.getElementById('hora_ingreso').value;
    let modelo = document.getElementById('tipo').value;
    let fecha = document.getElementById('date').value;
    let comentario = document.getElementById('anotacion').value;
    let consulta = consultas [motivo,modelo,hora_entrada,comentario,fecha];
    let con1 = new Consulta(modelo,motivo,hora_entrada,comentario,fecha,);
   consultas.push(con1);
    alert ("Tu consulta se a sido registrada");

}
function updateOptionSelect(){
    let options = '<option value="" selected disabled>Seleccione</option>'
    let select =  document.getElementById('trabajador');
    select.innerHTML = '';
    for(let i = 0; i<trabajador.length; i++){
        options += `<option value="${i}">${trabajador[i].Nombre}</option>`;
    }
    select.innerHTML = options;
}