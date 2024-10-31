import React from 'react';
import iconImag from '../../../icon/icon.png'
import MenuApp from "../../Molecules/menuBar-app/menu-app";
import SearchApp from "../../Molecules/searchBox-app/search-app";

function HeaderApp(props) {
    return (
        <div className="w-full flex flex-row-reverse items-center gap-[10.4167vw] px-[6.9444vw] py-[4.898vh]">
            <img src={iconImag} className="w-[95px] h-[32px] "/>
            <MenuApp></MenuApp>
            <SearchApp></SearchApp>
        </div>
    );
}

export default HeaderApp;