import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCarts from "../../Hooks/UseCarts";



const FoodCard = ({ item }) => {
  const { _id,name, image, price, recipe } = item;
  const navigate = useNavigate();
  const location= useLocation()
  const { user } = UseAuth();
const axiosSecure=UseAxiosSecure()
  const [, refetch] = UseCarts() // array er first element ta na lagle amon , deye dite hohe otherwise problem kore
  
  
  const handelAddCart = () => {
    // console.log(food)
    if (user && user.email) {
      //  sent cart item to the database
      const cartItem = {
        menuId:_id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data.insertedId)
          if (res.data) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart item count
            refetch()
          }
      })

    }

    else {
      Swal.fire({
        title: "You are not login",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={ handelAddCart}
              className="btn bg-slate-100 border-0 border-b-4 border-orange-300 mt-4 btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
