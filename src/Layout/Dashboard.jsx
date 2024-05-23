import { FiShoppingCart } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import {
  FaAd,
  FaBook,
  FaEnvelope,
  FaList,
  FaRegCalendarAlt,
  FaSearch,
  FaUser,
  FaUsers,
  FaUtensils,
  FaVoicemail,
} from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import UseCarts from "../Hooks/UseCarts";

const Dashboard = () => {
  const [cart] = UseCarts();

  const isAdmin = true;

  return (
    <div className="flex ">
      {/* dashboard side bar */}

      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaRegCalendarAlt />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                 <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaRegCalendarAlt />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FiShoppingCart />
                  My Cart ({cart.length})
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
            </>
          )}

          {/* shared navlink */}
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
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              Contact
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
