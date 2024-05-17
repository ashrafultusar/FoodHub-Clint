import Bannar from "../Bannar/Bannar";
import CallUs from "../CallUs/CallUs";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import FoodBoss from "../FoodBoss/FoodBoss";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Catagory></Catagory>
            <FoodBoss></FoodBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
        </div>
    );
};

export default Home;