import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="Linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className="Linha">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
        <div className="Linha">
        <Conversor moedaA="RUB" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="RUB"></Conversor>
        </div>
    </div>
  );
}

export default App;
