import { Helmet } from "react-helmet-async";
import Bannar from "../Bannar/Bannar";
import CallUs from "../CallUs/CallUs";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import FoodBoss from "../FoodBoss/FoodBoss";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testamonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FoodHub | Home</title>
            </Helmet>
            <Bannar></Bannar>
            <Catagory></Catagory>
            <FoodBoss></FoodBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;