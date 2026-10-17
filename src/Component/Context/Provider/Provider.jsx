import React from "react";
import AuthContext from "../Context/Context";

const Provider = ({ children }) => {

    const HandleName=()=>{
        const names="alamin";
        return names;
    }

    const info={
        HandleName:HandleName(),
    };


  return <AuthContext value={info}>{children}</AuthContext>;
};

export default Provider;
