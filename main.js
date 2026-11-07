const listaIndice = document.querySelector('#lista-indice');
const subtitulo = document.querySelectorAll('main h2');

subtitulo.forEach(function(subtitulos){
    const itemIndice = document.createElement('li');
    const enlaceIndice = document.createElement('a');

    enlaceIndice.href = '#' + subtitulos.id;
    enlaceIndice.textContent = subtitulos.textContent;

    itemIndice.append(enlaceIndice);
    listaIndice.append(itemIndice);
});

const botonModo = document.querySelector('#boton-modo');

botonModo.addEventListener('click', function () {
    document.body.classList.toggle('oscuro');

    if (document.body.classList.contains('oscuro')) {
        botonModo.textContent = 'Modo claro';
    } else {
        botonModo.textContent = 'Modo oscuro';
    }
});

const botonesTamano = document.querySelectorAll('.boton-tamano');
const articulo = document.querySelector('main');

botonesTamano.forEach(function (botonTamano) {
    botonTamano.addEventListener('click', function () {
        const tamano = botonTamano.getAttribute('data-tamano');

        articulo.classList.remove('texto-pequeno');
        articulo.classList.remove('texto-grande');

        if (tamano === 'pequeno') {
            articulo.classList.add('texto-pequeno');
        } else if (tamano === 'grande') {
            articulo.classList.add('texto-grande');
        }

        botonesTamano.forEach(function (boton) {
            boton.classList.remove('activo');
        });
        botonTamano.classList.add('activo');
    });
});

