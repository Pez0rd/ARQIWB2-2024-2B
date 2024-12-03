const TemplateExpressions = () => {
    const nome = 'Pedro';
    const dados = {
        idade: 16,
        profissao: 'aluno'
    }

    return(
        <div>
            <h2>Olá, {nome}! Seja bem-vindo(a)!</h2>
            <h2>Você é {dados.profissao} e tem {dados.idade} anos.</h2>
            <p>{console.log('Usando o React!')}</p>
        </div>
    );
};

export default TemplateExpressions;