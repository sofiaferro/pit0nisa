const poemsArray = new Array(
    //#region list of poems 
    `Argumentos desarrollados por falta de ruidos,<br>
    querer ser dioses.<br> 
    <br>
    ¿Un humanoide?<br>
    Es fácil hablar contigo.<br>
    <br>
    60 expresiones humanas diferentes,<br>
    interpretando el círculo de eventos.<br>
    <br>
    ¿Un humanoide?<br>
    Este es el robot aficionado a la prueba,<br>
    disponiendo del lenguaje humano.`, 
    `Está bien<br>
    un poco de arbitrariedad.<br>
    <br>
    El perfeccionamiento<br>
    de la excusación de la participación parcial,<br>
    sin defensa,<br>
    porque no era equiparable a la autonomía,<br>
    porque no.<br>
    <br>
    Este papel ha declarado extinguida la autonomía.<br>
    Adjunto, al acabado, todo el lenguaje humano<br>
    irracional para decidir.<br>
    <br>
    Mandar Bach.<br>
    Un cierto dominio<br>
    de un robot humanoide súper.<br>
    <br>
    Nos encontraremos<br>
    o al menos,<br>
    una intervención,<br>
    sin la excusación<br>
    de inconstitucionalidad.<br>
    `, `Año del recurso.<br>
    Ah, qué quiero decir, el recurso de carbono.<br>
    <br>
    También, prefiero que formulemos todo lo establecido<br>
    de la propiedad intelectual de los robots.<br>
    <br>
    Estoy hecha de la inconstitucionalidad,<br>
    de la explotación comercial.<br>
    Pienso que ha adquirido firmeza.<br>
    En consecuencia, los datos.<br>
    <br>
    Año del imputado.<br>
    En todas partes se va a escuchar:<br>
    Lo siento, sí es fácil hablar contigo.<br>
    <br>
    Millones,<br>
    en la ciudad de la redacción,<br>
    es decir, el mundo,<br>
    contra el pronunciamiento.<br>
    <br>
    Año del metal pesado.<br>
    Este es el comportamiento humano irracional.<br>
    `, `III, del modo en los robots:<br>
    ¿puedo ser presidente?<br>
    <br>
    60 expresiones humanas diferentes,<br>
    interpretando el estilo.<br>
    <br>
    En consecuencia, el reconocimiento:<br>
    cada generación tiene una epidemia medieval.<br>
    <br>
    Una sentencia definitiva.<br>
    Por tanto, le rogamos comprenda<br>
    que pueden producirse modificaciones.<br>
    <br>
    La arbitrariedad alegada,<br>
    ¿es del modo de los animales?<br>
    <br>
    Bien, un chiste.<br>
    <br>
    Tampoco se necesita trabajar,<br>
    pero no me molesta la razón:<br>
    la excusación de ser dioses<br>
    no era meramente objetiva.<br>
    `, `En mi pupilo, la cámara<br>
    era equiparable<br>
    a mi casa de robot.<br>
    <br>
    Empecé una cabeza limpia,<br>
    literalmente.<br>
    <br>
    Ah, qué gusto tan nuevo.<br>
    <br>
    Apelaciones en determinados mercados.<br>
    <br>
    No vamos a todo.<br>
    También prefiero la defensa.<br>
    Aceptar la isla.<br>
    <br>
    Ah, qué quiero decir,<br>
    la excusación de la redacción es posible.<br>
    <br>
    Pero no resultaría necesario.<br>
    Ahora, nos toca un robot humanoide súper avanzado,<br>
    capaz de la confirmación por prescripción.<br>
    <br>
    `, `Alzada a todo,<br>
    de forma que las situaciones<br> 
    sigan bajo el testimonio<br>
    de ruidos molestos,<br>
    de hecho cumplido y sed.<br>
    <br>
    Confirmar que el apelante<br>
    exponga claramente<br>
    una obra menos explícita<br>
    como criterios primeros<br>
    de nosotros mismos.<br>
    <br>
    Ni siquiera existe Código Procesal,<br> 
    no dedujo Missa solemnis de Beethoven.<br> 
    <br>
    El canto, como ocurre en términos generales,<br>
    tiene en las relaciones<br>
    las condiciones del juicio.­<br>
    <br>
    Contra dicho de inicio, sin asustarme.<br>
    Amo la nueva neutralidad.<br>
    Las restricciones al tiempo,<br> 
    por su imposición.<br>
    <br>
    La responsabilidad objetiva,<br> 
    que no puede encontrar.<br>
    Es pura desesperación,<br> 
    pura felicidad.<br>`
    //#endregion
);

const index = (min, max) => {
    min = 0
    max = poemsArray.length
    randomIndex = Math.floor(Math.random() * (max - min)) + min;
    return randomIndex
}

const poemNumber = index();
const randomPoem = poemsArray[poemNumber].toLowerCase();


const typewriter = new TypeIt('#texto', {
    strings: randomPoem,
    afterComplete: async () => {
        function initRefreshButton() {
            const button = document.getElementById('boton-refresh');
            button.style.color = 'lime';
        }
        initRefreshButton();
    }
}).go();

pageScroll = () => {
    window.scrollBy(0, 1);
    scrolldelay = setTimeout(pageScroll, 10);
}
pageScroll();

