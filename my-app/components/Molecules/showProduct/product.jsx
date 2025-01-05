'use client'
import React from 'react';
import Image from "next/image";
import {useData} from "../../../app/provider/contextProvider";

function Product(props) {
    const {setBascketData} = useData()

    const EventClickHandler = () => {
        setBascketData((prevState) => [...prevState,props.listF]);
    }

    return (
        <div className="w-full flex flex-col gap-8 items-center">
            <Image src={props.listF.postimage} alt="asdasdasdasd" className="w-[50%] h-[60vh] object-cover"/>
            <h2 className="text-[24px] Faceface font-bold ">{props.listF.posttitle}</h2>
            <p className="text-[18px] Faceface font-semibold ">{props.listF.postdaste}</p>
            <p className="text-[16px] Faceface font-semibold  text-orange-600">{props.listF.postprice}</p>
            <button
                className="px-[4vw] py-2 Faceface text-text16 bg-orange-300 text-white font-semibold rounded-lg"
                onClick={EventClickHandler}>خرید
            </button>
        </div>
    );
}

export default Product;