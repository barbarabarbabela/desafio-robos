import "./App.css";
import Overview from "../components/Overview";
import Header from "../components/Header";
import CreateRobot from "../components/CreateRobot";
import Card from "../components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <CreateRobot />
      <Card />
    </div>
  );
}

export default App;
