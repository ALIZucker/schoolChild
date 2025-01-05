import React from 'react';
import HeaderApp from "../Organisms/Header/header-app";
import BannerApp from "../Organisms/Banner-app/banner-app";
import NewPostApp from "../Organisms/newpostshow/NewPost-app";
import MenuApp from "../Molecules/menuBar-app/menu-app";
import MapApp from "../Organisms/MapRoad/map-app";
import ImageApp from "../Organisms/imageAdd/Image-app";
import {newpost, bookPost} from "../../lib/Data"
import img2 from '../../public/img/Capture.PNG'
import img3 from '../../public/img/Group.png'
import ArticleApp from "../Organisms/articleApp/article-app";
import Footer from "../Organisms/Footer/footer";

const HomePage = () => {

    return (
        <div className="w-[95.4907vw] flex  flex-col items-center lg:gap-3 gap-8">

            <BannerApp></BannerApp>
            <NewPostApp Titlebpx="جدیدترین آموزش های تحصیلی" posts={newpost} name="nawpost"></NewPostApp>
            <MapApp></MapApp>
            <ImageApp imageAddress={img2}></ImageApp>
            <NewPostApp Titlebpx="جدیدترین کتاب های آموزشی" posts={bookPost} name="bookPost"></NewPostApp>
            <ImageApp imageAddress={img3}></ImageApp>
            <NewPostApp Titlebpx="جدیدترین آموزش های تحصیلی" posts={newpost} name="nawpost"></NewPostApp>
            <ArticleApp></ArticleApp>

        </div>
    );
};

export default HomePage;