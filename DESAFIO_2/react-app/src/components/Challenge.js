const Events = () => {
  const a = 2;
  const b = 3;

  const somar = () => {
    console.log(a + b);
  };

  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
      <button onClick={somar}>Somar</button>
    </div>
  );
};

export default Events;
