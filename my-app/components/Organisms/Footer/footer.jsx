import React from 'react';
import img from '../../../public/icon/icon.png'
import img2 from '../../../public/icon/call-incoming.png'
import img3 from '../../../public/icon/sms.svg'
import img4 from '../../../public/icon/location.png'
import style from './style.module.css'
import PropTypes from "prop-types";
import fo1 from '../../../public/img/2.jpg'
import fo2 from '../../../public/img/w1.jpg'
import fo3 from '../../../public/img/w.jpg'
import sh1 from '../../../public/icon/Asset.jpg'
import sh2 from '../../../public/icon/sms.jpg'
import sh3 from '../../../public/icon/whatsapp.jpg'
import sh4 from '../../../public/icon/Asset 1 9.png'
import Image from "next/image";
function Footer(props) {
    return (
        <div
            className="w-full flex lg:flex-row-reverse flex-col items-center lg:gap-[4.244vw] gap-8 mt-[124px] h-[410px] bg-[#f7f7f7] px-[5.2083vw] py-[75px]">
            <div className="flex flex-col items-end lg:gap-[12px] gap-4">
                <Image alt="image" src={img} className="lg:w-[9.0186vw] lg:h-[46px] w-[25vw]"/>
                <p className="Faceface lg:text-text16 text-[2.7vw] lg:w-[29.1777vw] w-[50vw]">یادگیری آسان را با تجربه ی عالی آموزش مجازی بستر
                    آموزش دانش‌اموز والدین و معلم تجربه کنیدیادگیری آسان را با تجربه ی عالی آموزش مجازی است.</p>
                <div className="flex flex-col items-end gap-2 ">
                    <section className="flex flex-row-reverse gap-4 "><Image alt="image" src={img2} className="w-6 h-6"/><span
                        className="lg:text-text16 text-[2.7vw]">011 - 33223322</span></section>
                    <section className="flex flex-row-reverse gap-4 "><Image alt="image" src={img3} className="w-6 h-6"/><span
                        className="lg:text-text16 text-[2.7vw]">Badoum@gmail.com</span></section>
                    <section className="flex flex-row-reverse gap-4 "><Image alt="image" src={img4} className="w-6 h-6"/><span
                        className="lg:text-text16 text-[2.7vw]">ایران - مازندران - ساری - خیابان ولیعصر</span></section>
                </div>

            </div>
            <div className="flex flex-row w-full justify-around ">
                <Pyvand title="پشتیبانی" item1="تماس با ما" item2="نمونه کارها" item3="خدمات ما"
                        item4="پشتیبانی انلاین"></Pyvand>

                <Pyvand title="پیوند" item1=" صفحه اصلی" item2="مشتریان" item3="تعرفه خدماتی" item4="وبلاگ"></Pyvand>
            </div>

            <NeshanEtemad></NeshanEtemad>
        </div>
    );
}

Pyvand.propTypes = {
    title: PropTypes.string,
    item1: PropTypes.string,
    item2: PropTypes.string,
    item3: PropTypes.string,
    item4: PropTypes.string
}

function NeshanEtemad(props) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row gap-6">
                <Image alt="image" src={fo1} className="lg:w-[6.6976vw] lg:h-[119px] w-[27vw] object-cover"/>
                <Image alt="image" src={fo2} className="lg:w-[6.6976vw] lg:h-[119px] w-[27vw] object-cover"/>
                <Image alt="image" src={fo3} className="lg:w-[6.6976vw] lg:h-[119px] w-[27vw] object-cover"/>
            </div>
            <p className="lg:text-text16 text-[3vw] text-fooftercolor mt-[50px] Faceface">ما را در شبکه های اجتماعی دنبال کنید.</p>
            <div className="flex flex-row gap-6 mt-4 items-center">
                <Image alt="image" src={sh1} className="p-3 "/>
                <Image alt="image" src={sh2} className="p-3 "/>
                <Image alt="image" src={sh3} className="p-3 "/>
                <Image alt="image" src={sh4} className="p-3 "/>
            </div>
        </div>
    )
}

function Pyvand(pr) {

    return (
        <div className="Faceface justify-center gap-6 flex flex-col  lg:w-[8.6207vw] w-[20vw]">
            <h3 className="lg:text-text20 text-[4vw] text-textsecenf">{pr.title}</h3>
            <ol className={style.footerPosh}>
                <li className="flex lg:text-text16 text-[2.7vw]  text-fooftercolor  flex-row items-center gap-2"><span
                    className={style.dot}></span> {pr.item1}
                </li>
                <li className="flex lg:text-text16 text-[2.7vw]  text-fooftercolor  flex-row items-center gap-2"><span
                    className={style.dot}></span> {pr.item2}
                </li>
                <li className="flex lg:text-text16 text-[2.7vw]  text-fooftercolor flex-row items-center gap-2"><span
                    className={style.dot}></span> {pr.item3}
                </li>
                <li className="flex lg:text-text16 text-[2.7vw]  text-fooftercolor flex-row items-center gap-2"><span
                    className={style.dot}></span> {pr.item4}
                </li>

            </ol>
        </div>
    )
}

export default Footer;