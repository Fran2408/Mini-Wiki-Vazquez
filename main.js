//Requerimientos de los subtítulos y el índice

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

// Requerimientos del modo oscuro 

const botonModo = document.querySelector('#boton-modo');

botonModo.addEventListener('click', function () {
    document.body.classList.toggle('oscuro');

    if (document.body.classList.contains('oscuro')) {
        botonModo.textContent = 'Modo claro';
    } else {
        botonModo.textContent = 'Modo oscuro';
    }
});

// Requerimientos del tamaño del texto

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

// Requerimientos de plegado de subtítulos

subtitulo.forEach(function (subtitulo) {
    subtitulo.addEventListener('click', function () {
        subtitulo.parentElement.classList.toggle('plegada');
    });
});

// Requerimientos de los comentarios



const comentariosLista = document.querySelector('#lista-comentarios');
const contador = document.querySelector('#contador');
const comentario = document.querySelector('#campo-comentario');
const nombre = document.querySelector('#campo-nombre');
const formulario = document.querySelector('#formulario-comentario');
const aviso = document.querySelector('#aviso');
const maximo = 200;
const minimo = 10;

comentario.addEventListener('input', function () {
    const caracteres = comentario.value.length;
    contador.textContent = `${caracteres} / ${maximo}`;
});

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    aviso.textContent = '';
    nombre.classList.remove('error');
    comentario.classList.remove('error');

    if (nombre.value.trim() === '') {
        aviso.textContent = 'El nombre no puede estar vacío';
        nombre.classList.add('error');
        return;
    }

    if (comentario.value.length < minimo || comentario.value.length > maximo) {
        aviso.textContent = 'La cantidad de caracteres del comentario debe estar entre 10 y 200';
        comentario.classList.add('error');
        return;
    }

    crearComentario(nombre.value.trim(), comentario.value);
    formulario.reset();
    contador.textContent = `0 / ${maximo}`;
});

comentariosLista.addEventListener('click', function (e) {
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.remove();
    }
});

function crearComentario(textoNombre, textoComentario) {
    const itemComentario = document.createElement('li');
    const nombreElemento = document.createElement('strong');
    const comentarioElemento = document.createElement('p');
    const botonBorrar = document.createElement('button');

    nombreElemento.textContent = textoNombre;
    comentarioElemento.textContent = textoComentario;
    botonBorrar.textContent = 'Borrar';
    botonBorrar.classList.add('borrar');

    itemComentario.append(nombreElemento);
    itemComentario.append(comentarioElemento);
    itemComentario.append(botonBorrar);
    comentariosLista.append(itemComentario);
}