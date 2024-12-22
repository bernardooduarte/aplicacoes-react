import "./App.css";
import City from "./assets/city1.jpg";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.png" alt="Logo do React com texto" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade de Nova York" />
      </div>
      <ManageData />
    </div>
  );
}

export default App;
