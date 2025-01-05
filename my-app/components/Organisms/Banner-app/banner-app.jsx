import React from 'react';
import BannerImageApp from "../../Molecules/BannerImage/BannerImage-app";

function BannerApp(props) {
    return (
        <div className="lg:h-[712px]  w-full flex lg:flex-row-reverse  flex-col-reverse">
           <section className="  lg:w-[50%] w-full  flex flex-col text-right px-pad100 ">
            <h1 className="lg:text-[4.4444vw] text-[5.2vw] font-semibold lg:mt-[167px] mt-2  Faceface">یادگیری
                آسان همراه بادوم </h1>
               <p className="text-textitemcolor lg:text-text16 text-[2.7vw] Faceface mt-[16px]">یادگیری آسان  را با تجربه ی عالی آموزش مجازی بستر آموزش دانش‌اموز والدین و معلم تجربه کنید.</p>
               <button className=" mt-[32px] rounded-[30px] bg-backCfirst lg:w-[12.8414vw] ml-[18.3611vw] h-[48px] text-white lg:text-text16 text-[3vw] Faceface px-6">همین الان شروع کن</button>
           </section>
            <BannerImageApp></BannerImageApp>
        </div>
    );
}

export default BannerApp;