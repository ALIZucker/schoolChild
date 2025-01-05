'use client'

import React from 'react';
import imgS from '../../../public/icon/star.png'
import img2 from '../../../public/icon/teacher.png'
import img3 from '../../../public/icon/profile-2user.png'
import img4 from '../../../public/icon/Vector 3.png'
import PropTypes from "prop-types";
import Image from "next/image";
import { useRouter } from 'next/navigation';

import Link from "next/link";
import {useData} from "../../../app/provider/contextProvider";

PostApp.propTypes = {
    postadd: PropTypes.string.isRequired,
    postdaste: PropTypes.string.isRequired,
    posprice: PropTypes.string.isRequired,
    postTile: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    databaseName: PropTypes.string.isRequired
}

function PostApp(props) {

    const router=useRouter();
    const {setBascketData}=useData()

    const clickDO = (event) => {
        router.push(`/posts/${props.databaseName}?cont=${event.currentTarget.id}`);
    }



    return (
        <div  id={props.id} onClick={clickDO}
             className="box shadow items-center flex lg:w-[20.2778vw] w-[100%] flex-col   rounded-bl-[30px] rounded-br-[30px] rounded-tl-[20px] rounded-tr-[20px] flexset">
            <Image alt="image" src={props.postadd} className="m-[8px] lg:w-full lg:h-[27vh] w-[90%]  mt-4"/>
            <section className="flex w-full flex-row-reverse px-4 rounded-[10px] justify-between">
                <p className="text-backCfirst Faceface lg:text-[10px] text-[2.7vw] px-4 py-1 bg-backseced  font-semibold ">ریاضی
                    هفتم</p>
                <section className="bg-backCfirst text-white flex flex-row w-[48px] items-center rounded-[15px] ">
                    <Image alt="image" src={imgS} className="m-[8px]  w-3 h-3"/>
                    <p className="text-white lg:text-[10px] text-[2.8vw] Faceface font-semibold">4.5</p>
                </section>

            </section>
            <h2 className="mt-4 h-12 Faceface mx-4 lg:text-text16 text-[3.2vw] font-bold text-textsecenf">{props.postTile}</h2>
            <div className="w-full flex flex-row-reverse mt-3 px-4 justify-between">
                <section className="flex flex-row-reverse gap-1">
                    <Image alt="image" src={img2} className="w-4 h-4"/>
                    <p className="text-textsecenf lg:text-[12px] text-[2.9vw] Faceface font-semibold">محمد رضا گوهری</p>
                </section>
                <section className="flex flex-row-reverse gap-1">
                    <Image alt="image" src={img3} className="w-4 h-4"/>
                    <p className="text-textsecenf lg:text-[12px] text-[2.9vw] Faceface font-semibold">105 شرکت کننده</p>
                </section>

            </div>
            <Image alt="image" src={img4} className="mt-4 w-[18.0556vw]"/>
            <div className="flex flex-row mt-2 items-center gap-2 justify-end px-5 py-5   w-full ">
                <span className="Faceface text-[4vw] lg:text-[1.3889vw]">تومان</span><p
                className="lg:text-[1.6667vw] text-[4vw]  Faceface font-bold">{props.posprice}</p>
            </div>

        </div>
    );
}

export default PostApp;