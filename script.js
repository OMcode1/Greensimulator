const imagenes = [
    'images/1.png', 'images/1.png',
    'images/2.png', 'images/2.png',
    'images/3.png', 'images/3.png',
    'images/4.png', 'images/4.png',
    'images/5.png', 'images/5.png',
    'images/6.png', 'images/6.png',
    'images/7.png', 'images/7.png',
    'images/8.png', 'images/8.png'
];

const gameBoard = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;

imagenes.sort(() => 0.5 - Math.random());

imagenes.forEach((imagen, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.imagenes = imagen;
    card.addEventListener('click', flipCard);
    
    const img = document.createElement('img');
    img.src = imagen;
    card.appendChild(img);
    
    gameBoard.appendChild(card);
});

function flipCard() {
    if (this.classList.contains('flipped')) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;

    document.querySelectorAll('.card').forEach(card => {
        card.removeEventListener('click', flipCard);
    });

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.imagenes === secondCard.dataset.imagenes;
    console.log(firstCard.dataset.imagenes)
    console.log(secondCard.dataset.imagenes)
    console.log("is match" + isMatch)
    if (isMatch) {

        const numeroImagen = obtenerNumeroImagen(firstCard.dataset.imagenes);
        disableCards();
        setTimeout(() => {
            switch (numeroImagen) {
                case '1':
                    window.alert(`¡Has encontrado el par sobre Contaminación del agua: La contaminación del agua se refiere a la introducción de sustancias nocivas o contaminantes en cuerpos de agua! Encuentra más información haciendo click sobre el enlace, Qué es la contaminación del agua.`);
                    break;
                case '2':
                    window.alert(`¡Has encontrado el par sobre Efectos de la contaminación del agua: La contaminación del agua tiene efectos significativos en la salud humana y el medio ambiente! Encuentra más información haciendo click sobre el enlace, Efectos de la contaminación del agua.`);
                    break;
                case '3':
                    window.alert(`¡Has encontrado el par sobre Como mitigar la contaminación del agua: Para mitigar esta problemática, es fundamental regular y prohibir el uso de sustancias químicas y físicas contaminantes, como pesticidas y productos industriales.! Encuentra más información haciendo click sobre el enlace, Como mitigar la contaminación del agua.`);
                    break;
                case '4':
                    window.alert(`¡Has encontrado el par sobre Cómo podemos solucionar los efectos de la contaminación del agua: Para mejorar la calidad del agua y mitigar la contaminación, es esencial plantar árboles en las orillas de ríos y lagos, ya que filtran contaminantes y previenen la erosión.! Encuentra más información haciendo click sobre el enlace, Cómo podemos solucionar los efectos de la contaminación del agua.`);
                    break;
                case '5':
                    window.alert(`¡Has encontrado el par sobre Rol de los gobiernos en la problemática de la contaminación del agua: Los gobiernos deben regular agroquímicos, educar sobre prácticas sostenibles, ofrecer incentivos, apoyar la investigación y fomentar la cooperación internacional para reducir la contaminación del agua.! Encuentra más información haciendo click sobre el enlace, Rol de los gobiernos en la problemática de la contaminación del agua.`);
                    break;
                case '6':
                    window.alert(`¡Has encontrado el par sobre Qué podemos hacer como individuos para proteger el agua: Para conservar el agua y proteger el medio ambiente, reduce el consumo de agua, repara fugas, elige productos sostenibles, dispón correctamente de químicos, participa en limpiezas y apoya organizaciones ambientales.! Encuentra más información haciendo click sobre el enlace, Qué podemos hacer como individuos para proteger el agua.`);
                    break;
                case '7':
                    window.alert(`¡Has encontrado el par sobre Qué es el cambio climático y cómo afecta al agua: El cambio climático es un fenómeno que afecta profundamente a nuestro planeta y tiene consecuencias significativas para el ciclo del agua y no es más que los cambios a largo plazo en la temperatura y los patrones climáticos globales.! Encuentra más información haciendo click sobre el enlace, Qué es el cambio climático y cómo afecta al agua.`);
                    break;
                case '8':
                    window.alert(`¡Has encontrado el par sobre Qué podemos hacer para mitigar el cambio climático y proteger el agua: Para mitigar el cambio climático y proteger el agua, reduce emisiones de CO₂, usa energías renovables, adopta transporte sostenible, protege bosques y gestiona el agua eficientemente.! Encuentra más información haciendo click sobre el enlace, Qué podemos hacer para mitigar el cambio climático y proteger el agua.`);
                    break;
                default:
                    break;
            }
            resetBoard();
        }, 200);
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 300);
}

function resetBoard() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', flipCard);
    });

    [firstCard, secondCard] = [null, null];
}

function obtenerNumeroImagen(rutaImagen) {
    const partesRuta = rutaImagen.split('/');
    const nombreImagen = partesRuta[partesRuta.length - 1];
    const numeroImagen = nombreImagen.split('.')[0];
    return numeroImagen;
}
