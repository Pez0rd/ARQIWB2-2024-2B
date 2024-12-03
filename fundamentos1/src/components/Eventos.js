const Eventos = () => {

    // Aqui é uma funcão de manupulação de evento
    const handleMeuEvento = () => {
        console.log('Clicou no botão');
    };

    return(
        <div>

            <div>
                {/* comentário */}
                <button onClick={handleMeuEvento}>Clique aqui!</button>
            </div>

            <div>
                {/* comentário 2 */}
                <button onClick={() => console.log('Botão foi clicado!')}>Clique aqui também!</button>
            </div>

            <div>
                <button onClick={() => {
                    if(true){
                        console.log('Isso não deveria estar aqui!');
                    }
                }}>Clique!</button>
            </div>

        </div>
    );
};

export default Eventos;