import React from 'react';
import img from '../../../img/p1.png'
import imgS from '../../../icon/star.png'
import img2 from '../../../icon/teacher.png'
import img3 from '../../../icon/profile-2user.png'
import img4 from '../../../icon/Vector 3.png'
import PropTypes from "prop-types";

PostApp.propTypes = {
    postadd: PropTypes.string.isRequired,
    postDaste: PropTypes.string.isRequired,
    posprice: PropTypes.string.isRequired,
    postTile: PropTypes.string.isRequired
}

function PostApp(props) {
    return (
        <div
            className="shadow items-center flex w-[20.2778vw] flex-col h-[57.1429vh]  rounded-bl-[30px] rounded-br-[30px] rounded-tl-[20px] rounded-tr-[20px]">
            <img src={props.postadd} className="m-[8px] w-full h-[201px] mt-4"/>
            <section className="flex w-full flex-row-reverse px-4 rounded-[10px] justify-between">
                <p className="text-backCfirst Faceface text-[10px] px-4 py-1 bg-backseced  font-semibold ">{props.postDaste}</p>
                <section className="bg-backCfirst text-white flex flex-row w-[48px] items-center rounded-[15px] ">
                    <img src={imgS} className="m-[8px]  w-3 h-3"/>
                    <p className="text-white text-[10px] font-semibold">4.5</p>
                </section>

            </section>
            <h2 className="mt-4 h-12 Faceface mx-4 text-text16 font-bold text-textsecenf">{props.postTile}</h2>
            <div className="w-full flex flex-row-reverse mt-3 px-4 justify-between">
                <section className="flex flex-row-reverse gap-1">
                    <img src={img2} className="w-4 h-4"/>
                    <p className="text-textsecenf text-[12px] Faceface font-semibold">محمد رضا گوهری</p>
                </section>
                <section className="flex flex-row-reverse gap-1">
                    <img src={img3} className="w-4 h-4"/>
                    <p className="text-textsecenf text-[12px] Faceface font-semibold">105 شرکت کننده</p>
                </section>

            </div>
            <img src={img4} className="mt-4 w-[18.0556vw]"/>
            <div className="flex flex-row mt-2 items-center gap-2 justify-end px-5  w-full ">
                <span className="Faceface text-[1.3889vw]">تومان</span><p className="text-[1.6667vw] Faceface font-bold">{props.posprice}</p>
            </div>
        </div>
    );
}

export default PostApp;