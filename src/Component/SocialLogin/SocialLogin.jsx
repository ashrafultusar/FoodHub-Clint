import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";

const SocialLogin = () => {
    const { googleSignIn } = UseAuth()
    

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
            console.log(res.user)
        })

    }

  return (
    <div>
      <div>
        <button onClick={handelGoogleSignIn} className="btn w-full bg-[#dfbd88] text-xl">
          <FaGoogle /> 
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
