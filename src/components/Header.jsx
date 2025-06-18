import { IoFastFoodSharp } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import { IoPizzaOutline } from "react-icons/io5";
import { LuSalad } from "react-icons/lu";
import { LiaPepperHotSolid } from "react-icons/lia";
import { GiCupcake } from "react-icons/gi";

function Header() {
  return (
    <section className="header">
      <div className="header-wrapper">
        <div className="header-item active ">
          <IoFastFoodSharp className="icon"/>
          <p>All</p>
        </div>
        <div className="header-item">
          <BiSolidDrink className="icon"/>
          <p>Drinks</p>
        </div>
        <div className="header-item">
          <IoPizzaOutline className="icon"/>
          <p>Pizza</p>
        </div>
        <div className="header-item">
          <LuSalad className="icon"/>
          <p>Salad</p>
        </div>
        <div className="header-item">
          <LiaPepperHotSolid className="icon"/>
          <p>Spicy</p>
        </div>
        <div className="header-item">
          <GiCupcake className="icon"/>
          <p>Sweets</p>
        </div>
      </div>

      <button className="button-cta">View All</button>
    </section>
  );
}

export default Header;