import React from 'react';
import HeaderApp from "../Organisms/Header/header-app";
import BannerApp from "../Organisms/Banner-app/banner-app";
import NewPostApp from "../Organisms/newpostshow/NewPost-app";

const Home = () => {
    return (
        <div className="w-[95.4907vw]  ">
            <HeaderApp></HeaderApp>
            <BannerApp></BannerApp>
            <NewPostApp></NewPostApp>
        </div>
    );
};

export default Home;