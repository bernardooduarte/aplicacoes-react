const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h2>Dados dos usuários</h2>

      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissao}</li>
        {idade >= 18 ? (
          <p>Apto para tirar a carteira</p>
        ) : (
          <p>Não apto para tirar a carteira</p>
        )}
      </ul>
    </div>
  );
};

export default UserDetails;
