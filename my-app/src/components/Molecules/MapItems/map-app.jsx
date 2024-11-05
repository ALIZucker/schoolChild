import React from 'react';
import img from '../../../img/Frame.png'



function MapAppitems(props) {
    return (
        <div className="w-full flex flex-row-reverse py-[24px] gap-6">
            {props.data.map((item, index) => {
                return <section
                    className="shadow rounded-[16px] items-center w-[290px] h-[104px] gap-2 px-4 py-2  flex flex-row-reverse">
                    <img src={item.image} className="w-[68px] h-[68px]"/>
                    <section className="flex flex-col gap-1">
                        <h3 className="Faceface text-textsecenf text-text20"> {item.titleImage}</h3>
                        <p className="Faceface text-textitemcolor text-[14px]">مشاهده‌ی نقشه ی راه</p>
                    </section>
                </section>

            })}

        </div>
    );
}

export default MapAppitems;