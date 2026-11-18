/**
 * estrenos.js
 * -----------
 * Pide los estrenos a la API (GET /api/estrenos) y monta un
 * <TarjetaEstreno> por cada uno dentro de <ul id="lista-estrenos">.
 *
 * Se carga desde templates/estrenos.html DESPUES de TarjetaEstreno.js:
 *   <script type="text/babel" src="/js/componentes/TarjetaEstreno.js"></script>
 *   <script type="text/babel" src="/js/estrenos.js"></script>
 *
 * La API devuelve un array JSON con este formato (ver static/data/estrenos.json):
 *   [
 *     { "id": 1, "titulo": "Nebula Roja", "fechaEstreno": "2026-11-14",
 *       "genero": "Ciencia ficcion", "plataforma": "Netflix" },
 *     ...
 *   ]
 */

function ListaEstrenos() {

    // Estado que almacena los estrenos recibidos de la API
    const [estrenos, setEstrenos] = React.useState([]);

    // Se ejecuta una sola vez cuando se monta el componente
    React.useEffect(() => {

        fetch("/api/estrenos")
            .then(res => res.json())
            .then(data => setEstrenos(data))
            .catch(error => console.error("Error al cargar los estrenos:", error));

    }, []);

    // Genera una tarjeta por cada estreno
    return (
        <>
            {estrenos.map(estreno => (
                <TarjetaEstreno
                    key={estreno.id}
                    titulo={estreno.titulo}
                    fechaEstreno={estreno.fechaEstreno}
                    genero={estreno.genero}
                    plataforma={estreno.plataforma}
                />
            ))}
        </>
    );
}

// Monta React en la lista de estrenos
const contenedor = document.getElementById("lista-estrenos");
const raiz = ReactDOM.createRoot(contenedor);
raiz.render(<ListaEstrenos />);