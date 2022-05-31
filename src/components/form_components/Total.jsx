export default function Total(props) {
  let ticketPrice;

  {
    props.ticket === "General" ? (ticketPrice = props.amount * 799) : (ticketPrice = props.amount * 1299);
  }
  const initialValue = 0;
  const sumWithInitial = props.basket.reduce(
    (prevValue, curValue) => prevValue + curValue.amount * curValue.price,
    initialValue
  );
  const totalPrice = ticketPrice + sumWithInitial;
  console.log(props);
  return (
    <div className="total">
      <p>Total:</p>
      <p>{totalPrice}Dkk</p>
    </div>
  );
}