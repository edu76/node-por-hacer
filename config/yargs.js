//necesitamos configurar para definir los comandos 

const descripcion = {
    demand: true,
    alias: 'd', // d de descripcion 
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c', // con este alias recibe si la tarea esta pendiente por hacer o si ya se cumpli 
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { //definimos comandos, descripcion o ayuda que quiero mostrar y al final el objeto entre corchetes
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina los datos ingresados para una tarea', {
        descripcion
    })
    .help()
    .argv;

//para que trabaje todo este codig, necesitamos exportarlo 
module.exports = {
    argv
}