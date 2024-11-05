import React from 'react';
import HeaderApp from "../Organisms/Header/header-app";
import BannerApp from "../Organisms/Banner-app/banner-app";
import NewPostApp from "../Organisms/newpostshow/NewPost-app";
import MenuApp from "../Molecules/menuBar-app/menu-app";
import MapApp from "../Organisms/MapRoad/map-app";
import ImageApp from "../Organisms/imageAdd/Image-app";
import {newpost,bookPost} from "./Data"
import img2 from '../../img/Capture.PNG'
import img3 from '../../img/Group.png'
import ArticleApp from "../Organisms/articleApp/article-app";
import Footer from "../Organisms/Footer/footer";

const Home = () => {
    return (
        <div className="w-[95.4907vw] flex  flex-col items-center gap-3 ">
            <HeaderApp></HeaderApp>
            <BannerApp></BannerApp>
            <NewPostApp Titlebpx="جدیدترین آموزش های تحصیلی" posts={newpost}></NewPostApp>
            <MapApp></MapApp>
            <ImageApp imageAddress={img2}></ImageApp>
            <NewPostApp Titlebpx="جدیدترین کتاب های آموزشی" posts={bookPost}></NewPostApp>
            <ImageApp imageAddress={img3}></ImageApp>
            <NewPostApp Titlebpx="جدیدترین آموزش های تحصیلی" posts={newpost}></NewPostApp>
            <ArticleApp></ArticleApp>
            <Footer></Footer>
        </div>
    );
};

export default Home;