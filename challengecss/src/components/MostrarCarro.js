import styles from "./MostrarCarro.module.css";

const MostrarCarro = ({ marca, modelo, ano }) => {
  return (
    <div className={styles.div_carros}>
      <div className={styles.div_carro}>
        <p>Marca: {marca}</p>
        <p>Modelo: {modelo}</p>
        <p>Ano: {ano}</p>
      </div>
    </div>
  );
};

export default MostrarCarro;
