const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let lista = '';

        if (!Number(base)) {
            reject(`${ base } no es un numero`.red);
            return;
        }

        if (!Number(limite)) {
            reject(`${ limite } no es un numero`.red);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            lista += `${ base } * ${ i } = ${ base*i } \n`.bgBlue.green;
        }

        resolve(lista);
    })


}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`${ base } no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`${ limite } no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i } \n`;
        };

        fs.writeFile(`tablas/tabla_${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla_${ base }.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}