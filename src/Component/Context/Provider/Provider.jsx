import React, { useEffect, useState } from "react";
import AuthContext from "../Context/Context";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../FireBase/firebase.init";

const Provider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState(null);
  const [Loading, setLoading] = useState(false);

  ///setuser
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(true);
    });
    return () => unsubcribe();
  }, []);

  ///Signout
  const signout = () => {
    return signOut(auth);
  };

  //GoogleSignIN
  const GoogleProvider = new GoogleAuthProvider();
  const GoogleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  //github login
  const GithubProvider= new GithubAuthProvider();
  const GithubSignIn=()=>{
    return signInWithPopup(auth,GithubProvider);
  }

  //signinWith email and pass
  const SignUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //signin with email & pass
  const SignIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //email verify
  const Emailverification = (email) => {
    return sendEmailVerification(email);
  };

  //update Profile
  const UpdateProfileInfo = (name, imges) => {
    return updateProfile(name, imges);
  };

  //for modals-info

  const updatePhotowithName = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const info = {
    GoogleSignIn,
    CurrentUser,
    setCurrentUser,
    signout,
    setLoading,
    Loading,
    SignUp,
    SignIn,
    Emailverification,
    UpdateProfileInfo,
    updatePhotowithName,
    GithubSignIn
  };

  return <AuthContext value={info}>{children}</AuthContext>;
};

export default Provider;
