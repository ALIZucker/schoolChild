import React from 'react';
import Image from "next/image";


function MapAppitems(props) {
    return (
        <div className="w-full flex lg:flex-row-reverse  lg:justify-evenly flex-col-reverse py-[24px] items-center lg:gap-6 gap-2">
            {props.data.map((item, index) => {
                return <section key={index}
                                className="shadow  cursor-pointer rounded-[16px] items-center  w-[290px] h-[104px] gap-2 px-4 py-2  flex flex-row-reverse">
                    <Image alt="image" src={item.image} className="w-[68px] h-[68px]"/>
                    <section className="flex flex-col gap-1">
                        <h3 className="Faceface text-textsecenf lg:text-text20 text-[3vw]"> {item.titleImage}</h3>
                        <p className="Faceface text-textitemcolor text-[14px]">مشاهده‌ی نقشه ی راه</p>
                    </section>
                </section>

            })}

        </div>
    );
}

export default MapAppitems;