import React, { use, useRef, useState } from "react";
import { TbBrandGoogleHome } from "react-icons/tb";
import { Link, NavLink } from "react-router";
import "./navsection.css";
import { MdOutlineHomeMini } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { LuRotate3D } from "react-icons/lu";
import AuthContext from "../Context/Context/Context";
import { Bounce, toast } from "react-toastify";

const NavSection = () => {
  const { CurrentUser, setCurrentUser, signout, updatePhotowithName } =
    use(AuthContext);
  //console.log(CurrentUser);
  ///Handle SignOut
  const HandleSignout = () => {
    signout().then(() => {
      setCurrentUser(null);
      toast.success("Signout Successfully", {
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

  ///Handle Modals Section;

  const ProfileOpenModals = useRef(null);

  const HandleModalsSection = () => {
    ProfileOpenModals.current.showModal();
  };

  const namesref = useRef(null);
  const photoref = useRef(null);
  const HandleProfileSubmit = (event) => {
    event.preventDefault();
  };
  const handleUpdateProfile = () => {
    //console.log("Hi... Bro");
    //console.log(namesref.current.value);
    const displayName = namesref.current.value;
    const photoURL = photoref.current.value;
    if (displayName == "") {
      toast.info("Please Enter Your Name", {
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
    if (photoURL == "") {
      toast.info("Please Enter Your Photo Url", {
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
    updatePhotowithName(displayName, photoURL).then(() => {
      toast.success("Profile Update Successfully", {
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

  const links = (
    <>
      <li>
        <NavLink to="/">
          <span className="hidden lg:flex">
            <TbBrandGoogleHome className="-mr-1" size={18} />
          </span>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all/models">
          <span className="hidden lg:flex ">
            <MdOutlineHomeMini className="-mr-1" size={18} />
          </span>
          All Models
        </NavLink>
      </li>
      <li>
        <NavLink to="/model/add">
          <span className="hidden lg:flex">
            <IoAddCircleSharp className="-mr-1" size={18} />
          </span>
          Add Models
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm rounded-xl relative">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box absolute z-50 mt-3 w-52 px-1 space-y-1 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-[15px] md:text-[26px]lg:text-xl font-bold"
          >
            <span>
              <LuRotate3D />
            </span>
            3D Model Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {CurrentUser ? (
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={CurrentUser.photoURL}></img>
                  </div>
                </div>
                <ul
                  tabIndex={-1}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow absolute z-50"
                >
                  <div>
                    <li>
                      <a
                        onClick={HandleModalsSection}
                        className="justify-between"
                      >
                        Profile
                      </a>
                    </li>
                  </div>

                  <li>
                    <a onClick={HandleSignout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary px-7 font-bold">Login</button>
            </Link>
          )}
        </div>
      </div>
      <dialog
        ref={ProfileOpenModals}
        className="modal modal-bottom sm:modal-middle py-10"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center text-[#5882E8]">
            Update Profile
          </h3>

          <form onSubmit={HandleProfileSubmit}>
            <div className="aura aura-silver text-sm w-full mt-5">
              <div className="card bg-base-100">
                <div className="card-body">
                  <fieldset className="mt-3   fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Name"
                      defaultValue={CurrentUser?.displayName}
                      name="names"
                      ref={namesref}
                    />

                    <label className="label mt-3">Email</label>
                    <input
                      type="email"
                      className="input w-full"
                      placeholder="Email"
                      value={CurrentUser?.email}
                      readOnly
                    />

                    <label className="label mt-3">Profile Image</label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="url"
                      ref={photoref}
                    />
                    <button
                      type="button"
                      onClick={() => handleUpdateProfile()}
                      className="btn btn-primary mt-3"
                    >
                      Update Profile
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>

            <div></div>
          </form>

          <div className="modal-action">
            <form method="dialog" className="flex gap-1">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn px-4">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NavSection;
