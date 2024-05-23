import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  const handelGoogleSignIn = () => {
    googleSignIn()
    .then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div>
      <div>
        <button
          onClick={handelGoogleSignIn}
          className="btn w-full bg-[#dfbd88] text-xl"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
