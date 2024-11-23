const { registrar, leer } = require('./operaciones.js');

// Obtener los argumentos de la línea de comandos
const [,, operacion, ...args] = process.argv;

if (operacion === 'registrar') {
    const [nombre, edad, animal, color, enfermedad] = args;

    // Validar que todos los argumentos requeridos estén presentes
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.error('Faltan argumentos. Uso: node index.js registrar <nombre> <edad> <animal> <color> <enfermedad>');
        process.exit(1);
    }

    registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === 'leer') {
    leer();
}

if (!['registrar', 'leer'].includes(operacion)) {
    console.error('Operación no válida. Usa "registrar" o "leer".');
}
