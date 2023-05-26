const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .check((argv)=>{
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .check((argv)=>{
        if (isNaN(argv.l)) {
            throw 'l debe tener un valor boleano'
        }
        return true;
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe:'Es el valor hasta donde llega la multiplicación'
    })
    .check((argv)=>{
        if (isNaN(argv.l)) {
            throw 'h debe tener un valor boleano'
        }
        return true;
    })
    .argv;

module.exports = argv;