import './App.css';

import ws from './assets/ws.png'
import Condicional from './components/Condicional';
import GerenciaDados from './components/GerenciaDados';
import Listas from './components/Listas';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React 2</h1>
      {/* Imagem em public */}
      <img src="/pucci.webp" alt="Pucci"/>

      {/* Imagem em assets */}
      <img src={ws} alt="White Snake"/>
      
      {/* Gerenciar dados */}
      <GerenciaDados/>

      {/* Listas */}
      <Listas/>

      {/* Condicional */}
      <Condicional/>
    </div>
  );
}

export default App;
