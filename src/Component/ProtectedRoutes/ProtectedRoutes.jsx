import React, { use } from 'react';
import AuthContext from '../Context/Context/Context';
import { Navigate } from 'react-router';
import LoadingSection from '../LoadingSection/LoadingSection';

const ProtectedRoutes = ({children}) => {
    const {CurrentUser,Loading}=use(AuthContext);


    if(Loading===false){
        return <LoadingSection></LoadingSection>
    }

    if(CurrentUser){
        return children;
    }
    else{
        return <Navigate to="/login"></Navigate>
    }
};

export default ProtectedRoutes;
