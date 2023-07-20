import "./App.css";
import ResumoGeral from "../components/ResumoGeral";
import Header from "../components/Header";
import CriarRobo from "../components/CriarRobo";
import Card from "../components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <ResumoGeral />
      <CriarRobo />
      <Card />
    </div>
  );
}

export default App;
