import React from 'react';
import MapAppitems from "../../Molecules/MapItems/map-app";

function MapApp(props) {
    return (
        <div className="w-full  flex flex-col mt-[208px] px-[6.9444vw]">
            <h2 className="Faceface text-textsecenf font-bold text-text32">نقشه راه</h2>
            <p className="text-text16 text-textitemcolor Faceface mb-6">انتخاب انحصاری ما از بهترین شاهکارهای آموزش منحصر به فرد آموزش در بادوم  را کشف کنید.</p>
           <MapAppitems></MapAppitems>
            <MapAppitems></MapAppitems>

        </div>
    );
}

export default MapApp;