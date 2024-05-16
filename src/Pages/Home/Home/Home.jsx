import Bannar from "../Bannar/Bannar";
import Catagory from "../Catagory/Catagory";
import FoodBoss from "../FoodBoss/FoodBoss";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Catagory></Catagory>
            <FoodBoss></FoodBoss>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;