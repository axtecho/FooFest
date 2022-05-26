import { useState } from "react";

export default function GreenCamping({ basket, setBasket }) {
  const [isGreen, setIsGreen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


console.log(`Checked is ${isChecked}, isGreen is ${isGreen}`)
function checkStatus() {
}

  const addToBasket = () => {
    console.log("adding to basket");
    //   setBasket((prevState) => prevState.concat({ product: "Green Camping", price: 249, id: 666}));
  };
  const removeFromBasket = (id) => {
    setBasket((old) => old.filter((item) => item.id !== id));
  };
  const handleChange = () => {
    setIsChecked(prevState => !prevState);
    setIsGreen(prevState => prevState = !isChecked);
checkStatus();
    isGreen ? { addToBasket } : { removeFromBasket };
    
    //     setIsGreen((prevState) => !prevState);
    //    {isChecked
    //       ? setBasket((prevState) => [...prevState, { product: "Green Camping", price: 249, id: 666 }])
    //       : setBasket((prevState) => prevState.filter((product) => product.id !== id));
    //     console.log(basket, isGreen, isChecked);}
  };

  return (
    <div className="formItem">
      <input type="checkbox" id="greenCamping" name="greenCamping" onChange={handleChange} checked={isChecked} />
      <div className="text_content">
        <label htmlFor="greenCamping">Green camping </label>
        <p className="subtext">
          Includes re-usable dishes, eco-friendly toiletries, and solar power rather than burning whale oil
        </p>
      </div>
      <p className="price">+249 DKK</p>
    </div>
  );
}
