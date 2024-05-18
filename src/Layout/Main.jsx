import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/Navber/Navber";


const Main = () => {

    const location=useLocation()
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div>
            {noHeaderFooter||<Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;