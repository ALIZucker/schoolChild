"use client"
import React, {useRef} from 'react';
import img from '../../../public/icon/arrow-left.png'
import PostApp from "../../Molecules/post/Post-app";
import PropTypes from "prop-types";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";
import {postShow} from "../../../lib/serviceShowProduct";


NewPostApp.propTypes = {
    Titlebpx: PropTypes.string,
    posts: PropTypes.array,
    name: PropTypes.string.isRequired
}


function NewPostApp(props) {
    const containerRef = useRef();
    //postShow.setShowProductModal(props.name)



    function goNext() {
        var obj = containerRef.current.clientWidth;
        containerRef.current.scrollBy({
            left: obj,
        });
    }

    function goPrevious() {
        var obj = containerRef.current.clientWidth;
        containerRef.current.scrollBy({
            left: -obj,
        });
    }


    return (
        <div className="flex flex-col  w-full  ">
            <section className="flex  flex-row-reverse justify-between w-full py-[10px] px-[6.9444vw]">
                <div className="flex flex-col w-[38.6111vw] lg:gap-6 gap-2">
                    <h2 className="Faceface lg:text-text32 text-[5vw] w-full font-bold ">
                        {props.Titlebpx}
                    </h2>
                    <p className="Faceface lg:text-text16 text-[2vw] text-textitemcolor">
                        انتخاب انحصاری ما از بهترین شاهکارهای آموزش منحصر به فرد آموزش در بادوم را کشف کنید.
                    </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image alt="image" src={img} className="w-6 h-6"/>
                    <p className="Faceface lg:text-text16 text-[2vw] text-backCfirst ">مشاهد بیشتر</p>
                </div>
            </section>


            <div className={style["container"]} ref={containerRef}>

                {props.posts.map((value, index) => {
                    return <PostApp databaseName={props.name} id={index.toString()} key={index} postTile={value.posttitle}
                                    postdaste={value.postDaste}
                                    postadd={value.postimage} posprice={value.postprice}></PostApp>

                })}


                <a className={style["prev"]} onClick={goPrevious}>❮</a>
                <a className={style["next"]} onClick={goNext}>❯</a>
            </div>

        </div>
    );
}

export default NewPostApp;