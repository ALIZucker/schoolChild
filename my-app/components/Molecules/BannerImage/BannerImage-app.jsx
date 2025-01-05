import React from 'react';
import img1 from '../../../public/img/GroupBanner.png'
import img2 from '../../../public/img/circle.png'
import img3 from '../../../public/img/Ellipse 3305.png'
import Image from "next/image";

function BannerImageApp(props) {
    return (
        <div className="lg:w-[50%] w-full h-[370px]   relative">
            <Image src={img1} alt="img" className="lg:w-[33.5417vw] w-[100%] lg:h-[60.9932vh] h-[40vh] z-20 object-cover absolute lg:top-[100px] top-[1vh] lg:left-[12.0139vw] left-[1vw]" />
            <Image src={img2} alt="image" className="lg:w-[170px] absolute lg:h-[170px] z-10 lg:top-[70px]  top-[1vh] left-[6.4583vw]"/>
            <Image src={img3} alt="image" className="lg:w-[108px] absolute lg:h-[108px] z-10 lg:top-[67.3197vh]  top-[6vh] left-[42.5vw]"/>

        </div>
    );
}

export default BannerImageApp;