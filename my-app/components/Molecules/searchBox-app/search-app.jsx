'use client'
import React from 'react';
import searchicon from '../../../public/icon/search.png'
import usericon from '../../../public/icon/user.png'
import style from './styles.module.css';
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useData} from "../../../app/provider/contextProvider";

function SearchApp(props) {
    const router = useRouter();
    const [data, setData] = React.useState('');
    const [closeOpen, setCloseOpen] = React.useState(false);
    const {isSubmit, bascketData} = useData()


    React.useEffect(() => {

        const storedData = localStorage.getItem('sharedData');
        setData(storedData || 'No data found');

    }, []);

    const shareData = () => {
        localStorage.setItem('sharedData', 'No data found');
        router.push('/login');
    };

    const EventClose = () => {
        setCloseOpen(prevState => !prevState);
    }

    return (
        <div className="hidden lg:flex flex-row-reverse items-center h-10 gap-gap16">
            <section className={style.borderbox} style={{
                width: "17.9861vw;", border: "1px solid rgba(225, 229, 234, 1);"
            }}>
                <Image alt="image" src={searchicon} className="w-5 h-5"/>
                <input type='text' style={{direction: "rtl"}} placeholder='جست وجو'
                       className="w-full text-[0.8vw] outline-0 border-0 Faceface fontface"/>
            </section>
            {
                isSubmit ? (
                    <div className="w-full flex flex-row-reverse items-center gap-2 relative">
                        <button
                            className="text-text16 font-semibold Faceface border-2 rounded-2xl px-[2vw] py-2  hover:bg-gray-700 hover:text-yellow-50">اطلاعات
                            کاربر
                        </button>
                        <button onClick={EventClose}
                                className="text-text16 font-semibold Faceface border-2 rounded-2xl px-[1vw] py-2 hover:bg-gray-700 hover:text-yellow-50">
                            سبد خرید
                        </button>
                        {
                            closeOpen ? (
                                <div
                                    className="absolute h-[40vh]  z-50 flex flex-col items-center gap-2 w-[19vw] rounded-lg py-2 px-[1vw] bg-white borderBascket right-[1vw] top-[4.7vh]">
                                    <h2 className="fontface text-text18 font-bold w-full text-right"> سبد خرید</h2>
                                    <section
                                        className="w-full px-1 py-1  h-[25vh] overflow-y-auto overflow-auto  flex flex-col gap-2">
                                        {bascketData.map((item, index) => (
                                            <div className="flex shadowCustom flex-row px-1 py-1 gap-1" key={index}>
                                                <Image className="w-[7vw] h-[8vh] object-cover" src={item.postimage}
                                                       alt={`image`}/>
                                                <div className="flex flex-col gap-1 items-start">
                                                    <h3 className="text-[0.6vw] text-right fontface font-bold">{item.posttitle}</h3>
                                                    <p className="w-full text-right text-red-600 text-[1vw] font-semibold fontface ">{item.postprice}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </section>
                                    <Link href="/basket"
                                          className="w-full py-3 bg-orange-500 rounded-[4px] text-center text-white font-bold">ورود
                                        به سبد خرید</Link>
                                </div>
                            ) : (<div></div>)
                        }


                    </div>
                ) : (
                    <button onClick={shareData} className={style.borderbox}
                            style={{cursor: "pointer", width: "11.6667vw", paddingTop: "10px", paddingBottom: "10px"}}>
                        <Image alt="image" src={usericon} className="w-5 h-5"/>
                        <p className="Faceface w-full text-textitemcolor  text-[0.8vw]" style={{direction: "rtl"}}>ورود
                            به پنل کاربری</p>
                    </button>
                )
            }

        </div>
    );
}

export default SearchApp;