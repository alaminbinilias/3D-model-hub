import React, { use, useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router";
import { Bounce, toast } from "react-toastify";
import AuthContext from "../Context/Context/Context";
import Swal from "sweetalert2";

const RegistrationSection = () => {
  const [showPass, setShowPass] = useState(false);
  const [ConShowPass, setConShowPass] = useState(false);
  const { SignUp, signout, Emailverification, UpdateProfileInfo } =
    use(AuthContext);

  const HandlePassShow = () => {
    if (showPass == true) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };

  const HandleConfirmPass = () => {
    if (ConShowPass == true) {
      setConShowPass(false);
    } else {
      setConShowPass(true);
    }
  };

  ///Form resigtration

  const HandleRegistrationForm = (event) => {
    event.preventDefault();
    const checkBtn = event.target.checkBtn.checked;
    //console.log(checkBtn);
    if (checkBtn === false) {
      toast.error("Please Accept all terms & conditions", {
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
      return;
    }

    const name = event.target.name.value;
    const email = event.target.email.value;
    const newPass = event.target.npass.value;
    const conPass = event.target.conpass.value;
    const images = event.target.images.value;

    //console.log({name,email,newPass,conPass,images});
    if (newPass !== conPass) {
      toast.error("New password & confirm password must be same", {
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
      return;
    }
    SignUp(email, newPass).then((users) => {
      //update Profile
      UpdateProfileInfo(users.user,{
        displayName:name,
        photoURL: images
      }).then(result=>{
        console.log(result);
      })

      //signout
      signout()
        .then((result) => {
          result;
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

      Emailverification(users.user).then(() => {});
      Swal.fire({
        title: "Good job!",
        text: "Registration SuccessFully",
        icon: "success",
      });
    });
  };

  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-center items-center py-10">
        <p className="text-2xl font-semibold text-[#5882E8]">
          Registration Now!
        </p>
        <p className="text-sm mt-1">
          Already have an account?
          <span className="text-primary hover:underline">
            <Link to="/login" className="ml-1">
              Login Now
            </Link>
          </span>
        </p>
        <form onSubmit={HandleRegistrationForm}>
          <fieldset className=" mt-4 fieldset bg-base-200 border-base-300 rounded-box w-100 border p-4">
            <label className="label">Name</label>
            <input
              required
              type="text"
              className="input w-full"
              placeholder="Enter Your Name"
              name="name"
            />

            <label className="label">Email</label>
            <input
              required
              type="email"
              className="input w-full"
              placeholder="Email"
              name="email"
            />

            <label className="label">New Password</label>
            <div className="flex items-center relative">
              <input
                required
                type={showPass == false ? "password" : "text"}
                className="input w-full"
                placeholder="Password"
                name="npass"
              />
              <div
                onClick={HandlePassShow}
                className="absolute left-85 cursor-pointer p-1"
              >
                {showPass ? <IoMdEyeOff size={14} /> : <IoMdEye size={14} />}
              </div>
            </div>

            <label className="label">Confirm Password</label>
            <div className="flex items-center relative">
              <input
                required
                type={ConShowPass == false ? "password" : "text"}
                className="input w-full"
                placeholder="Password"
                name="conpass"
              />
              <div
                onClick={HandleConfirmPass}
                className="absolute left-85 cursor-pointer p-1"
              >
                {ConShowPass ? <IoMdEyeOff size={14} /> : <IoMdEye size={14} />}
              </div>
            </div>
            <label className="label">images url</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Please enter your profile logo address"
              name="images"
            />
            <div className="flex items-center gap-2 my-1">
              <input
                name="checkBtn"
                type="checkbox"
                className="checkbox size-5"
              />
              <p>I accept all terms & conditions</p>
            </div>
            <div className="aura aura-holo aura-xs mt-2">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegistrationSection;
