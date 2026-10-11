import React from 'react';
import NavSection from '../../Component/NavSection/NavSection';
import FooterSection from '../../Component/FooterSection/FooterSection';
import { Outlet } from 'react-router';

const HomePages = () => {
    return (
        <div className=' h-screen w-11/12 mx-auto flex flex-col'>
            <NavSection></NavSection>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <FooterSection></FooterSection>
        </div>
    );
};

export default HomePages;