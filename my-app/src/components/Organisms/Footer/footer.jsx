import React from 'react';
import img from '../../../icon/icon.png'
import img2 from '../../../icon/call-incoming.png'
import img3 from '../../../icon/sms.svg'
import img4 from '../../../icon/location.png'
import style from './style.module.css'
import PropTypes from "prop-types";
import fo1 from '../../../img/2.jpg'
import fo2 from '../../../img/w1.jpg'
import fo3 from '../../../img/w.jpg'
import sh1 from '../../../icon/Asset.jpg'
import sh2 from '../../../icon/sms.jpg'
import sh3 from '../../../icon/whatsapp.jpg'
import sh4 from '../../../icon/Asset 1 9.png'
function Footer(props) {
    return (
        <div
            className="w-full flex flex-row-reverse gap-[4.244vw] mt-[124px] h-[410px] bg-[#f7f7f7] px-[5.2083vw] py-[75px]">
            <div className="flex flex-col items-end gap-[12px]">
                <img src={img} className="w-[9.0186vw] h-[46px]"/>
                <p className="Faceface text-text16 w-[29.1777vw] ">یادگیری آسان را با تجربه ی عالی آموزش مجازی بستر
                    آموزش دانش‌اموز والدین و معلم تجربه کنیدیادگیری آسان را با تجربه ی عالی آموزش مجازی است.</p>
                <div className="flex flex-col items-end gap-2 ">
                    <section className="flex flex-row-reverse gap-4 "><img src={img2} className="w-6 h-6"/><span
                        className="text-text16">011 - 33223322</span></section>
                    <section className="flex flex-row-reverse gap-4 "><img src={img3} className="w-6 h-6"/><span
                        className="text-text16">Badoum@gmail.com</span></section>
                    <section className="flex flex-row-reverse gap-4 "><img src={img4} className="w-6 h-6"/><span
                        className="text-text16">ایران - مازندران - ساری - خیابان ولیعصر</span></section>
                </div>

            </div>
            <Pyvand title="پشتیبانی" item1="تماس با ما" item2="نمونه کارها" item3="خدمات ما"
                    item4="پشتیبانی انلاین"></Pyvand>

            <Pyvand title="پیوند" item1=" صفحه اصلی" item2="مشتریان" item3="تعرفه خدماتی" item4="وبلاگ"></Pyvand>
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
                <img src={fo1} className="w-[6.6976vw] h-[119px] object-cover"/>
                <img src={fo2} className="w-[6.6976vw] h-[119px] object-cover"/>
                <img src={fo3} className="w-[6.6976vw] h-[119px] object-cover"/>
            </div>
            <p className="text-text16 text-fooftercolor mt-[50px] Faceface">ما را در شبکه های اجتماعی دنبال کنید.</p>
            <div className="flex flex-row gap-6 mt-4 items-center">
                <img src={sh1} className="p-3 "/>
                <img src={sh2} className="p-3 "/>
                <img src={sh3} className="p-3 "/>
                <img src={sh4} className="p-3 "/>
            </div>
        </div>
    )
}

function Pyvand(pr) {

    return (
        <div className="Faceface justify-center gap-6 flex flex-col  w-[8.6207vw]">
            <h3 className="text-text20 text-textsecenf">{pr.title}</h3>
            <ol className={style.footerPosh}>
                <li className="flex text-text16 text-fooftercolor  flex-row items-center gap-2"><span
                    className={style.dot}></span> {pr.item1}
                </li>
                <li className="flex text-text16 text-fooftercolor  flex-row items-center gap-2"><span
                    className={style.dot}></span> {pr.item2}
                </li>
                <li className="flex text-text16 text-fooftercolor flex-row items-center gap-2"><span
                    className={style.dot}></span> {pr.item3}
                </li>
                <li className="flex text-text16 text-fooftercolor flex-row items-center gap-2"><span
                    className={style.dot}></span> {pr.item4}
                </li>

            </ol>
        </div>
    )
}

export default Footer;