const listaIndice = document.querySelector('#lista-indice');
const subtitulos = document.querySelectorAll('main h2');

subtitulos.forEach(function(subtitulos){
    const itemIndice = document.createElement('li');
    const enlaceIndice = document.createElement('a');

    enlaceIndice.href = '#' + subtitulos.id;
    enlaceIndice.textContent = subtitulos.textContent;

    itemIndice.append(enlaceIndice);
    listaIndice.append(itemIndice);
});
