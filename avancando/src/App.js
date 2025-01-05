import "./App.css";
import City from "./assets/city1.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Joaquim";
  const [userName] = useState("Maria");

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
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructing */}
      <CarDetails brand="Vw" km={100000} color="Azul" />
    </div>
  );
}

export default App;
