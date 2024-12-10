const Condicional = () => {
    const x = false;
    const nome = "Pedro"

    return(
        <div>
            {x && <p>Imprime somente se o x for true.</p>} 
            {!x && <p>Imprime somente se o x for false.</p>}
            {
                nome === "Pedro" ?
                (<div>Nome é Pedro</div>) :
                (<div>Nome não encontrado.</div>)
            }
        </div>
    );
}

export default Condicional;