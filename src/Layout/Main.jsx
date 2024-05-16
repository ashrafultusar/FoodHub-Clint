import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/Navber/Navber";
import Bannar from "../Pages/Home/Bannar/Bannar";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Bannar></Bannar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;