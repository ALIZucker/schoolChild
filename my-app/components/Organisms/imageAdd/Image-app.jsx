import React from 'react';

import PropTypes from "prop-types";
import Image from "next/image";



function ImageApp(props) {
    return (
        <div className="hidden w-full mb-[100px] lg:flex justify-center px-[70px] mt-[120px] ">
        <Image alt="Image" src={props.imageAddress} className="w-full  h-[290px]" />
        </div>
    );
}

export default ImageApp;