import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import loginImg from '../../../src/assets/others/authentication1.png'



const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // console.log('state in the location',location.state)
  const [disable, setButtonDisable] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaSubmit = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <Helmet>
        <title>FoodHub | Login</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImg} alt="" />
            
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={captchaSubmit}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha text"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  type="submit"
                  className="btn border-0 bg-[#D1A054B2] "
                  value="Login"
                />
              </div>
            </form>

            <div className="pb-6 mx-8">
              <SocialLogin></SocialLogin>
            </div>
            <p className="pb-6 text-center">
              <small>
                New Here? Please
                <Link
                  to="/register"
                  className="text-orange-500  font-bold uppercase"
                >
                  Register
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
