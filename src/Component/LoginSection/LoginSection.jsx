import React, { use, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router";
import AuthContext from "../Context/Context/Context";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";
const LoginSection = () => {
  const [showPass, setShowPass] = useState(false);
  const { GoogleSignIn, SignIn, GithubSignIn } = use(AuthContext);

  //GoogleSignIn

  const HandleGoogleSignIn = () => {
    GoogleSignIn().then((result) => {
      console.log(result);
    });
  };

  const HandlePassShow = () => {
    if (showPass == true) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };

  const HandleGithubSignIn = () => {
    //console.log("Github Login");
    GithubSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        toast.error(err.code, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  const HandleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    //console.log({email,pass});
    SignIn(email, pass)
      .then((result) => {
        console.log(result.user);

        if (result.user.emailVerified == false) {
          toast.info("Please verify your email", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          //event.target.reset();
          return;
        }

        Swal.fire({
          title: "Good job!",
          text: "Login Successfully",
          icon: "success",
        });
      })
      .catch((err) => {
        toast.error(err.code, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="h-full mt-2 py-10">
      <div className="h-full flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold text-[#5882E8]">Login Now!</p>
        <p className="text-sm mt-1">
          Don't have an account?
          <span className="text-primary hover:underline">
            <Link to="/registration" className="ml-1">
              Register Now
            </Link>
          </span>
        </p>
        <form onSubmit={HandleSignIn}>
          <fieldset className=" mt-4 fieldset bg-base-200 border-base-300 rounded-box w-100 border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input w-full"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <div className="flex items-center relative">
              <input
                type={showPass == false ? "password" : "text"}
                className="input w-full"
                placeholder="Password"
                name="pass"
                required
              />
              <div
                onClick={HandlePassShow}
                className="absolute left-85 cursor-pointer p-1"
              >
                {showPass ? <IoMdEyeOff size={14} /> : <IoMdEye size={14} />}
              </div>
            </div>
            <div className="">
              <span className="text-gray-600 hover:underline cursor-pointer">
                Forgot Password
              </span>
            </div>

            <div className="aura aura-holo aura-xs mt-2">
              <button className="btn btn-primary w-full">Login</button>
            </div>

            <div className="flex gap-2 items-center justify-center w-full mt-3">
              <div className="border border-gray-400 w-full"></div>
              <div className="text-center">OR</div>
              <div className="border border-gray-400 w-full"></div>
            </div>
            <div>
              {/* Google btn */}
              <button
                type="button"
                onClick={HandleGoogleSignIn}
                className="btn w-full bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              {/* github Btn */}
              <button
                onClick={HandleGithubSignIn}
                type="button"
                className="btn w-full mt-2 bg-black text-white border-black"
              >
                <svg
                  aria-label="GitHub logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  ></path>
                </svg>
                Login with GitHub
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
