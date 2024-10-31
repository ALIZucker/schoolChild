import React from 'react';
import HeaderApp from "../Organisms/Header/header-app";
import BannerApp from "../Organisms/Banner-app/banner-app";

const Home = () => {
    return (
        <div className="w-[95.4907vw]  ">
            <HeaderApp></HeaderApp>
            <BannerApp></BannerApp>
        </div>
    );
};

export default Home;