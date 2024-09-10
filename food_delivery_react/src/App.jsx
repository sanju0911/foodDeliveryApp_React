import CART from "./components/CART/header";
import MealsDescription from "./components/MEALS/MealsDescription";
import Modal from "./components/CART/MODAL";
import { useState } from "react";

const APP = ()=>{

  const [showModal, setShowModal] = useState(true);

  const closeModalHandler = () => {
    setShowModal(false);
  };
   return(
    <>
    {showModal && <Modal onClose={closeModalHandler} />}
    <div>
      <CART></CART>
      <MealsDescription></MealsDescription>
      
    </div>
    </>
   )
}


export default APP ;