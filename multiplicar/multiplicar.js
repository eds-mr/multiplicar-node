const colors = require('colors');

const fs = require('fs');
let data = '';

let listarTabla = (base, limite) => {
    console.log('============================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('============================'.green);
    
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (!err) {
                resolve(`tabla-${base}-al-${limite}.txt`);
            } else {
                reject(err);
            }            
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}