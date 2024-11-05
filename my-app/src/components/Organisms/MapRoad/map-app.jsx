import React from 'react';
import MapAppitems from "../../Molecules/MapItems/map-app";
import pic1 from '../../../img/n1.png';
import pic2 from '../../../img/Frame 427319302.png';
import pic3 from '../../../img/Frame 427319301.png';
import pic4 from '../../../img/Frame 427319300.png';
import pic5 from '../../../img/Frame 427319299.png';
import pic6 from '../../../img/Frame 42731930.png';
import pic7 from '../../../img/Frame 427319.png';
import pic8 from '../../../img/Frame.png';

const data1=[{
    titleImage:"فرانت",
    image:pic1,
},{
    titleImage:"طراحی",
    image:pic2,
},{
    titleImage:"بک اند",
    image:pic3,
},{
    titleImage:" فول استک",
    image:pic4,
}]
const data2=[{
    titleImage:"موبایل",
    image:pic5,
},{
    titleImage:"سئو",
    image:pic6,
},{
    titleImage:"فرانت",
    image:pic7,
},{
    titleImage:"برنامه نویسی",
    image:pic8,
}]
function MapApp(props) {
    return (
        <div className="w-full  flex flex-col mt-[208px] px-[6.9444vw]">
            <h2 className="Faceface text-textsecenf font-bold text-text32">نقشه راه</h2>
            <p className="text-text16 text-textitemcolor Faceface mb-6">انتخاب انحصاری ما از بهترین شاهکارهای آموزش منحصر به فرد آموزش در بادوم  را کشف کنید.</p>
           <MapAppitems data={data1} ></MapAppitems>
            <MapAppitems data={data2}></MapAppitems>

        </div>
    );
}

export default MapApp;