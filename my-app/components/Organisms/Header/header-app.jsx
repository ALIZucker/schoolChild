import React from 'react';
import iconImag from'../../../public/icon/icon.png'
import MenuApp from "../../Molecules/menuBar-app/menu-app";
import SearchApp from "../../Molecules/searchBox-app/search-app";
import Image from "next/image";

function HeaderApp(props) {
    return (
        <div className=" w-full flex flex-row-reverse items-center justify-between lg:gap-[10.4167vw] gap-[3.4167vw] lg:px-[6.9444vw] px-[2.2vw] py-[2.1vh] lg:py-[4.898vh]">
            <Image alt="image" src={iconImag} className="lg:w-[95px] lg:h-[32px] w-[20.75vw] h-[3vh] object-cover" />
            <MenuApp></MenuApp>
            <SearchApp></SearchApp>
        </div>
    );
}

export default HeaderApp;