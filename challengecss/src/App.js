import "./App.css";
import MostrarCarro from "./components/MostrarCarro";

function App() {
  const carros = [
    { id: 1, marca: "Jeep", modelo: "Renegade", ano: 2021 },
    { id: 2, marca: "Fiat", modelo: "Freemont", ano: 2014 },
    { id: 3, marca: "Volksvagen", modelo: "Gol", ano: 2019 },
  ];

  return (
    <div className="App">
      <h1>Carros</h1>
      {carros.map((carro) => (
        <MostrarCarro
          key={carro.id}
          marca={carro.marca}
          modelo={carro.modelo}
          ano={carro.ano}
        />
      ))}
    </div>
  );
}

export default App;
