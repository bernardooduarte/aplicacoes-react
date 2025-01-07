import "./App.css";
import City from "./assets/city1.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";

function App() {
  //const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 1, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 1, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

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
      <CarDetails brand="Vw" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
    </div>
  );
}

export default App;
