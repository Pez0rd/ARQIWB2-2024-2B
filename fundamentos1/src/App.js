import './App.css';
import Eventos from './components/Eventos';
import PrimeiroComponente from './components/PrimeiroComponente';
import TemplateExpressions from './components/TemplateExpression';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React 1</h1>
      <PrimeiroComponente/>
      <TemplateExpressions/>
      <Eventos/>
    </div>
  );
}

export default App;
