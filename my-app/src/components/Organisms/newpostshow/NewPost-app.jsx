import React from 'react';
import img from '../../../icon/arrow-left.png'
import PostApp from "../../Molecules/post/Post-app";
import PropTypes from "prop-types";

NewPostApp.propTypes = {
    Titlebpx: PropTypes.string,
   posts: PropTypes.array
}


function NewPostApp(props) {
    console.log(props.posts)
    return (
        <div className="flex flex-col  w-full  ">
            <section className="flex flex-row-reverse justify-between w-full py-[10px] px-[6.9444vw]">
                <div className="flex flex-col w-[38.6111vw] gap-6">
                    <h2 className="Faceface text-text32 font-bold ">
                        {props.Titlebpx}
                    </h2>
                    <p className="Faceface text-text16 text-textitemcolor">
                        انتخاب انحصاری ما از بهترین شاهکارهای آموزش منحصر به فرد آموزش در بادوم  را کشف کنید.
                    </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src={img} alt="" className="w-6 h-6"/>
                    <p className="Faceface text-text16 text-backCfirst ">مشاهد بیشتر</p>
                </div>
            </section>

            <section className="flex gap-6 flex-row w-full mt-[48px] px-[6.9444vw]">
                {props.posts.map(value => {
                     return <PostApp key={1} postTile={value.posttitle} postDaste={value.postDaste} postadd={value.postimage} posprice={value.postprice}></PostApp>

                })}

            </section>
        </div>
    );
}

export default NewPostApp;