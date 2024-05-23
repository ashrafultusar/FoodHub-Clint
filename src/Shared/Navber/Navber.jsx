import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { FiShoppingCart } from "react-icons/fi";
import UseCarts from "../../Hooks/UseCarts";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCarts();
  console.log(user);

  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navOption = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>

      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link to={"/dashboard/cart"}>
          <button className="btn">
            <FiShoppingCart />

            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handelLogout} className="btn btn-active btn-ghost">
            Logout
          </button>
        </>
      ) : (
        <>
          
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 text-white bg-black max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        
        <div className="navbar-end">
        <div>
          <img className="w-12 rounded-full mr-2" src={user?.photoURL} alt="" />
        </div>

          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
