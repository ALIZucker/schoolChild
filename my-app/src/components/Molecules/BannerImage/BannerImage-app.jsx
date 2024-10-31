import React from 'react';
import img1 from '../../../img/GroupBanner.png'
import img2 from '../../../img/circle.png'
import img3 from '../../../img/Ellipse 3305.png'

function BannerImageApp(props) {
    return (
        <div className="w-[50%]  relative">
            <img src={img1}
                 className="w-[33.5417vw] h-[60.9932vh] z-20 object-cover absolute top-[100px] left-[12.0139vw]"/>
            <img src={img2} className="w-[170px] absolute h-[170px] z-10 top-[70px] left-[6.4583vw]"/>
            <img src={img3} className="w-[108px] absolute h-[108px] z-10 top-[67.3197vh] left-[42.5vw]"/>

        </div>
    );
}

export default BannerImageApp;