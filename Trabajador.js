class Trabajador extends Persona {
    nombre;
    apellido;
    horario;
    reparacion_realizada;
    experiencia_Lab;
    estudios;
    constructor(tiempo,arreglado,habilidad,formacion,apodo,lastname){
        super(apodo,lastname);
        this.horario = tiempo;
        this.reparacion_realizada = arreglado;
        this.experiencia_Lab = habilidad;
        this.estudios = formacion;
        this.apellido = lastname;
        this.nombre = apodo;
    }
    
}
