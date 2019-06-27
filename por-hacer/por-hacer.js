// configuro mi lógica


const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }



}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer; //ya que es el unico que me retorna la BDD pero primero hay que cargarDB
}

const actualizar = (descripcion, completado = true) => { // funcion que recibe dos argumentos, desc y comp

    cargarDB(); // es lo primero por hacer, cargar la BDD
    let index = listadoPorHacer.findIndex(tarea => { // creo variable llamada index con la funcion findIndex, que recibe un callback y hace ciclo interno p/cu de os elementos
            return tarea.descripcion === descripcion;
            // que JS me de el index o posicion de esta taraea si ella coincide con lo que pide el ususario
        })
        // si index >=0 es una posicion valida
    if (index >= 0) {
        listadoPorHacer[index].completado = completado; // se cambia el valor de completado por el valor que mando la persona
        guardarDB();
        return true; // para decir que se hixzo correctamente 
    } else {
        return false; // para decir que no lo hizo
    }
}

const borrar = (descripcion) => {

    cargarDB(); // sin la base de datos no veo que voy a borrar

    let nuevoListado = listadoPorHacer.filter(tarea => { //nuev arreglo llamado nuevolistado  y uso el .filter que me permite quitar o filtar algun elemento en particular y esa fincoon me devuelve un nuevo arreglo
        return tarea.descripcion !== descripcion // tarea.descripcion que sea DIFERENTE y ese es el que voy a borrar  
    });

    if (listadoPorHacer.length === nuevoListado.length) { // con ambos listado reviso si tienen el mismo largo(length) para sabrsi no se borro nada
        return false;
    } else { // si lo borro debo guardarlo en base de datos
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}