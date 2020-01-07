const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



//.options permite crear la opcion en la raiz a diferencia de command que es una orden y debe ir de la mano de los otros parametros
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;

//argv.direccion
//console.log(argv.direccion);
// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    // const loc = await lugar.getLugarLatLon(argv.direccion);
    // if (loc.length === 0) {
    //     throw new Error(`No hay resultados para ${direccion}`);
    // } else {
    //     const temp = await clima.getClima(loc.lat, loc.lon);
    //     if (temp.length === 0) {
    //         throw new Error(`No se pudo determinar el clima de ${direccion}`);
    //     } else {
    //         return `El clima de ${direccion} es de ${temp}°`;
    //     }
    // }

    //forma mas corta y bonita
    try {
        const loc = await lugar.getLugarLatLon(argv.direccion);
        const temp = await clima.getClima(loc.lat, loc.lon);
        return `El clima de ${direccion} es de ${temp}°`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }


    //salida
    //si funciona:El clima de xxxx es de xx
    //si falla:No se pudo determinar el clima de XXX
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);