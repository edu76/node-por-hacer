 //const argv = require('yargs').argv; // importamos el yargs 

 const argv = require('./config/yargs').argv;
 const color = require('colors');

 const porHacer = require('./por-hacer/por-hacer'); // hacemos el require del archivo ubicado en por-hacer

 let comando = argv._[0]; //posición cero por que ahi esta el comando

 switch (comando) {

     // hacemos case con las opciones que queremos crear 

     case 'crear':
         let tarea = porHacer.crear(argv.descripcion);
         console.log(tarea);
         break;

     case 'listar':

         let listado = porHacer.getListado();

         for (let tarea of listado) {
             console.log('======Por Hacer====='.green);
             console.log(tarea.descripcion);
             console.log('Estado: ', tarea.completado);
             console.log('===================='.green);
         }
         break;

     case 'actualizar':

         let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
         console.log(actualizado);
         break;

     case 'borrar':

         let borrado = porHacer.borrar(argv.descripcion); // almaceno el resultado de la funcion eliminado. 
         console.log(borrado); // esto me indica si lo logro hcacer o no 
         break;

     default: // en caso que se escriba algo aparte de las 3 opciones anteriores
         console.log('Comando no es reconocido');

 }