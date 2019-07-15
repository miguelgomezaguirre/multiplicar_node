const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + colors.green(`${ archivo }`)))
            .catch(e => console.log(e));

        break;
    default:
        console.log('comando no reconocido');
}