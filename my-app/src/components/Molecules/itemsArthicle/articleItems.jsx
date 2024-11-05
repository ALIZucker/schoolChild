import React from 'react';
import img from '../../../img/b2.png'
import img3 from "../../../icon/calendar.png";
import img2 from "../../../icon/arrow-left.png";

function ArticleItems(props) {
    return (
        <div className="w-[40.5836vw] flex flex-col items-center shadow rounded-2xl">
            <section className="flex flex-row-reverse rounded-2xl p-4  w-full gap-4">
                <img src={img} className="w-[11.0743vw] h-[138px]"/>
                <div className="flex flex-col gap-2">
                    <h3 className="text-text16 Faceface">1- محیط کاری مینیمال برای ایده گرفتن</h3>
                    <p className="text-[14px] Faceface">در خانواده چنانچه والدین خود الگوهایی مسئولیت پذیر برای فرزندانش
                        عزیزشان باشند، انتظارات آنها واضح و روشن باشد، </p>
                    <div className="flex flex-row-reverse justify-between items-center w-full">
                        <div className="flex flex-row-reverse items-center gap-2">
                            <img src={img3} className="w-6 w-6"/>
                            <p className="Faceface text-text16">۲۶ خرداد ۲۰۲۴</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <img src={img2} alt="" className="w-6 h-6"/>
                            <p className="Faceface text-text16 text-backCfirst ">مشاهد بیشتر</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default ArticleItems;