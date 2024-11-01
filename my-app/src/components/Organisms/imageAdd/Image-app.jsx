import React from 'react';

import PropTypes from "prop-types";



function ImageApp(props) {
    return (
        <div className="w-full mb-[100px] flex justify-center px-[70px] mt-[120px] ">
        <img src={props.imageAddress} className="w-full  h-[290px]" />
        </div>
    );
}

export default ImageApp;