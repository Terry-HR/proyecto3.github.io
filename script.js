const estudiantes = [
    {nombre: 'Juan', calificacion: 15},
    {nombre: 'Pablo', calificacion: 14},
    {nombre: 'Raul', calificacion: 19},
    {nombre: 'Rosa', calificacion: 17},
    {nombre: 'Oscar', calificacion: 6},
    {nombre: 'Juana', calificacion: 10},
    {nombre: 'Luisa', calificacion: 12},
    {nombre: 'Ana', calificacion: 13},
    {nombre: 'Josefina', calificacion: 16},
    {nombre: 'Jessie', calificacion: 12},
    {nombre: 'Humberto', calificacion: 11},
    {nombre: 'Gilberto', calificacion: 10}
];

function calcularProm(estudiantes){
    let suma = 0;
    for(let i = 0; i<estudiantes.length; i++){
        suma += estudiantes[i].calificacion;
    }
    return suma/estudiantes.length;
}

function mostrarEstudiantes(estudiantes, idTabla){
    const tabla = document.getElementById(idTabla);

    estudiantes.forEach(estudiante => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${estudiante.nombre}</td><td>${estudiante.calificacion}</td>`;
        tabla.appendChild(fila);
    });
}



//para los mejores y general
const estudiantesOrdenados = estudiantes.slice().sort((a,b) => b.calificacion - a.calificacion);

//para los peores
// const estudiantesOrdenadosAlReves = estudiantes.slice().sort((a,b) => a.calificacion - b.calificacion);


const promGen = calcularProm(estudiantesOrdenados);

mostrarEstudiantes(estudiantesOrdenados, 'general')

document.getElementById('resultado1').textContent = promGen.toFixed(2);



function EstudiantesMayorProm(estudiantes,prom){
    return estudiantes.filter(estudiante =>
        estudiante.calificacion > prom
    );
}

const estudiantesM = EstudiantesMayorProm(estudiantesOrdenados,promGen).slice(0,5);

mostrarEstudiantes(estudiantesM,'mejores')

const promM = calcularProm(estudiantesM);

document.getElementById('resultado2').textContent = promM.toFixed(2);





function EstudiantesMenorProm(estudiantes,prom){
    return estudiantes.filter(estudiante => estudiante.calificacion < prom);
}

const estudiantesP = EstudiantesMenorProm(estudiantesOrdenados,promGen).slice(0,5);

mostrarEstudiantes(estudiantesP,'peores');

const promP = calcularProm(estudiantesP);

document.getElementById('resultado3').textContent = promP.toFixed(2);