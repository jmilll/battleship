import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard'
import ShipFactory from './components/ShipFactory'

function App() {
  return (
    <div className="App">
      <GameBoard />
      <ShipFactory />
    
    </div>
  );
}

export default App;
