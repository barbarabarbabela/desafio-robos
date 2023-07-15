import './App.css';
import AdicionarRobo from './components/AdicionarRobo';
import AnaliseGeral from './components/AnaliseGeral';
import ResumoGeral from './components/ResumoGeral';

function App() {
  return (
    <div className="App">
      <AnaliseGeral />
      <ResumoGeral />
      <AdicionarRobo />
    </div>
  );
}

export default App;
