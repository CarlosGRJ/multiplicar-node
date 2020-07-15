// requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('======================='.green);

    return new Promise( (resolve, reject) => {

        if( !Number(base) ) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        if( !Number(limite) ) {
            reject(`El valor introducido ${ limite } no es un número`);
            return;
        }

        let data = '';

        for( let i = base; i <= limite ; i++ ) {

            console.log(`${ base } * ${ i } = ${ base * i }`);

        }

        fs.writeFile(`tablas/tabla-${ base }-${ limite }.txt`, data, (err) => {
            if (err) 
                reject(err)
            else 
                resolve(`tabla-${ base }-${ limite }.txt`)
        });

    });

}


let crearArchivo = ( base ) => {

    return new Promise( (resolve, reject) => {

        if( !Number(base) ) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for( let i = 1; i <= 10 ; i++ ) {

            data += `${ base } * ${ i } = ${ base * i }\n`;

        }


        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
        if (err) 
            reject(err)
        else 
            resolve(`tabla-${ base }.txt`)
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}
