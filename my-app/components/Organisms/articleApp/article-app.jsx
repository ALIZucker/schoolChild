import React from 'react';
import img from "../../../public/icon/arrow-left.png";
import img2 from "../../../public/img/Rectanglearth.png";
import img3 from "../../../public/icon/calendar.png";
import ArticleItems from "../../Molecules/itemsArthicle/articleItems";
import Image from "next/image";

function ArticleApp(props) {
    return (
        <div className="flex flex-col  w-full mt-24 gap-16 px-[6.9444vw]">
            <section className="flex flex-row-reverse justify-between w-full py-[10px] ">
                <div className="flex flex-col w-[38.6111vw] gap-6">
                    <h2 className="Faceface lg:text-text32 text-[5vw] font-bold ">
                        جدیدترین مقالات آموزشی
                    </h2>
                    <p className="Faceface lg:text-text16 text-textitemcolor text-[2vw]">
                        انتخاب انحصاری ما از بهترین شاهکارهای آموزش منحصر به فرد آموزش در بادوم را کشف کنید.
                    </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image alt="image" src={img}  className="w-6 h-6"/>
                    <p className="Faceface lg:text-text16 text-[2.7vw] cursor-pointer text-backCfirst ">مشاهد بیشتر</p>
                </div>
            </section>
            <section className="flex lg:flex-row-reverse flex-col cursor-pointer  w-full gap-6 items-center">
                <div className="lg:w-[40.0531vw] w-full px-4 py-4 flex flex-col shadow rounded-2xl items-end gap-6">
                    <Image alt="image" src={img2}  className=" lg:w-[37.931vw] w-full h-[312px] " />
                    <h2 className="lg:text-text18 text-[4.5vw] font-bold Faceface">محیط کاری مینیمال برای ایده گرفتن</h2>
                    <p className="Faceface lg:text-text16 text-[3vw] text-justify font-light">در خانواده چنانچه والدین خود الگوهایی مسئولیت پذیر برای فرزندانشان باشند، انتظارات آنها واضح و روشن باشد، مسئولیت های جزیی را به کودکان بسپارند و آنها را بابت انجام وظایفشان مورد تشویق قرار دهند میتوانند مسئولیت پذیری کودکان را افزایش دهند. </p>
                    <div className="flex flex-row-reverse justify-between items-center w-full">
                        <div className="flex flex-row-reverse items-center gap-2">
                            <Image alt="image" src={img3} className="w-6 w-6"/>
                            <p className="Faceface lg:text-text16 text-[3vw]">۲۶ خرداد ۲۰۲۴</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Image alt="image" src={img}  className="w-6 h-6"/>
                            <p className="Faceface lg:text-text16 text-[2.7vw] text-backCfirst ">مشاهد بیشتر</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <ArticleItems></ArticleItems>
                    <ArticleItems></ArticleItems>
                    <ArticleItems></ArticleItems>
                </div>


            </section>
        </div>
    );
}

export default ArticleApp;