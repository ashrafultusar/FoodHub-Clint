import { FiShoppingCart } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaList, FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import UseCarts from "../Hooks/UseCarts";

const Dashboard = () => {

    const [cart] = UseCarts();
    

  return (
    <div className="flex ">
      {/* dashboard side bar */}

      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/reservation">
              <FaRegCalendarAlt />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FiShoppingCart />
              My Cart  ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FcRating />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaList></FaList>
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <IoHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}

      <div className="flex-1 p-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
