import React from 'react';
import BannerImageApp from "../../Molecules/BannerImage/BannerImage-app";

function BannerApp(props) {
    return (
        <div className="h-[712px] w-full flex flex-row-reverse ">
           <section className="  w-[50%]  flex flex-col text-right px-pad100 ">
            <h1 className="text-[4.4444vw] font-semibold mt-[167px]  Faceface">یادگیری
                آسان همراه بادوم </h1>
               <p className="text-textitemcolor text-text16 Faceface mt-[16px]">یادگیری آسان  را با تجربه ی عالی آموزش مجازی بستر آموزش دانش‌اموز والدین و معلم تجربه کنید.</p>
               <button className=" mt-[32px] rounded-[30px] bg-backCfirst w-[201px] ml-[18.3611vw] h-[48px] text-white text-text16 Faceface px-6">همین الان شروع کن</button>
           </section>
            <BannerImageApp></BannerImageApp>
        </div>
    );
}

export default BannerApp;