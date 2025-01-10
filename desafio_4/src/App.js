import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const pessoas = [
    { id: 1, nome: "Bernardo", idade: 20, profissao: "Estudante" },
    { id: 2, nome: "Maria", idade: 18, profissao: "Engenheira" },
    { id: 3, nome: "Mateus", idade: 17, profissao: "Médico" },
  ];

  return (
    <div className="App">
      {/* array objetos */}
      {pessoas.map((pessoa) => (
        <UserDetails
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}
    </div>
  );
}

export default App;
