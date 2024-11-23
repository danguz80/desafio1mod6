const fs = require('fs');

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
    // Leer las citas existentes
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    
    // Crear la nueva cita
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };
    
    // Agregar la nueva cita al arreglo
    citas.push(nuevaCita);
    
    // Guardar el arreglo actualizado en el archivo
    fs.writeFileSync('citas.json', JSON.stringify(citas, 2), 'utf8');
    console.log('Cita registrada con éxito.');
};

// Función para leer y mostrar todas las citas
const leer = () => {
        const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
        console.log('Citas registradas:');
        citas.forEach((cita, index) => {
            console.log(`Cita ${index + 1}:`, cita);
        });
};

module.exports = { registrar, leer };
