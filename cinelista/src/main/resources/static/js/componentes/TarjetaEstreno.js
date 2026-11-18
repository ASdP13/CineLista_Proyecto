/**
 * TarjetaEstreno
 * ---------------
 * Componente de React (sin build, cargado via Babel Standalone) que
 * muestra un estreno como una tarjeta simple.
 *
 * Se guarda en static/js/componentes/TarjetaEstreno.js y se carga desde
 * templates/estrenos.html con:
 *   <script type="text/babel" src="/js/componentes/TarjetaEstreno.js"></script>
 *
 * Props que debe recibir:
 *  - titulo        (string) Titulo del estreno.
 *     TODO doc
 *
 * Evento:
 *  - Boton "Marcar interes": TODO doc
 *
 * Ejemplo de uso:
 *   <TarjetaEstreno
 *       titulo="Nebula Roja"
 *       TODO doc
 *   />
 */

/**
 * Componente que representa una tarjeta individual de un próximo estreno.
 *
 * @param {Object} props - Datos del estreno.
 * @param {string} props.titulo - Título de la película o serie.
 * @param {string} props.fechaEstreno - Fecha de estreno.
 * @param {string} props.genero - Género cinematográfico.
 * @param {string} [props.plataforma="Por confirmar"] - Plataforma donde estará disponible.
 *
 * Permite marcar o desmarcar el estreno como interesante mediante un estado local.
 */
function TarjetaEstreno({
                            titulo,
                            fechaEstreno,
                            genero,
                            plataforma = "Por confirmar"
                        }) {

    // Estado local: indica si el usuario está interesado
    const [interesado, setInteresado] = React.useState(false);

    return (
        <li className="tarjeta-estreno">
            <h3>{titulo}</h3>

            <p>Fecha de estreno: {fechaEstreno}</p>
            <p>Genero: {genero}</p>
            <p>Plataforma: {plataforma}</p>

            <button
                type="button"
                className="btn-interes"
                onClick={() => setInteresado(!interesado)}
            >
                {interesado ? "★" : "☆"} Marcar interes
            </button>
        </li>
    );
}
