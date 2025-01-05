import React from 'react';
import img from '../../../public/img/b2.png'
import img3 from "../../../public/icon/calendar.png";
import img2 from "../../../public/icon/arrow-left.png";
import Image from "next/image";

function ArticleItems(props) {
    return (
        <div className="lg:w-[40.5836vw] cursor-pointer w-full flex flex-col items-center shadow rounded-2xl">
            <section className="flex flex-row-reverse rounded-2xl p-4  w-full gap-4">
                <Image alt="image" src={img} className="lg:w-[11.0743vw] w-[27vw]  h-[138px]"/>
                <div className="flex flex-col gap-2">
                    <h3 className="lg:text-text16 text-[4vw] Faceface">1- محیط کاری مینیمال برای ایده گرفتن</h3>
                    <p className="lg:text-[14px] text-[3.1vw] Faceface">در خانواده چنانچه والدین خود الگوهایی مسئولیت پذیر برای فرزندانش
                        عزیزشان باشند، انتظارات آنها واضح و روشن باشد، </p>
                    <div className="flex flex-row-reverse justify-between items-center w-full">
                        <div className="flex flex-row-reverse items-center gap-2">
                            <Image alt="image" src={img3} className="w-6 w-6"/>
                            <p className="Faceface lg:text-text16 text-[2vw]">۲۶ خرداد ۲۰۲۴</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Image  src={img2} alt="" className="w-6 h-6"/>
                            <p className="Faceface lg:text-text16 text-[2vw] text-backCfirst ">مشاهد بیشتر</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default ArticleItems;