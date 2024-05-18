import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuimg from "../../assets/menu/banner3.jpg";
import UseMenu from "../../Hooks/UseMenu";
import desertImg from "../../../src/assets/menu/dessert-bg.jpeg";
import pizzatImg from "../../../src/assets/menu/pizza-bg.jpg";
import saladtImg from "../../../src/assets/menu/salad-bg.jpg";
import souptImg from "../../../src/assets/menu/soup-bg.jpg";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuCatagory from "./MenuCatagory/MenuCatagory";

const Menu = () => {
  const [menu] = UseMenu();
  const deserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div className="">
      <Helmet>
        <title>FoodHub | Menu</title>
      </Helmet>

      <Cover
        img={menuimg}
        title="OUR MENU"
        des="Would you like to try a dish?"
      ></Cover>
      {/* main catagory */}
      <div>
        <SectionTitle
          heading="---Don't miss---"
          subHeading="TODAY'S OFFER"
        ></SectionTitle>
        {/* offered categoy */}
        <MenuCatagory item={offered}></MenuCatagory>
        {/* desert category */}
        <MenuCatagory
          item={deserts}
          des="Would you like to try a dish?"
          title="Dessert"
          coverimg={desertImg}
        ></MenuCatagory>

        {/* pizza category */}
        <MenuCatagory
          item={pizza}
          des="Would you like to try a dish?"
          title="PIZZA"
          coverimg={pizzatImg}
        ></MenuCatagory>

        {/* SALADS cataegory */}
        <MenuCatagory
          item={salad}
          des="Would you like to try a dish?"
          title="salad"
          coverimg={saladtImg}
        ></MenuCatagory>

        {/* SOUPS */}

        <MenuCatagory
          item={soup}
          des="Would you like to try a dish?"
          title="SOUPS"
          coverimg={souptImg}
        ></MenuCatagory>
      </div>
    </div>
  );
};

export default Menu;
