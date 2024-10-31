import React from 'react';
import searchicon from '../../../icon/search.png'
import usericon from '../../../icon/user.png'
import style from './styles.module.css';

function SearchApp(props) {
    return (
        <div className="flex flex-row-reverse h-10 gap-gap16">
            <section className={style.borderbox} style={{
                width: "17.9861vw;", border: "1px solid rgba(225, 229, 234, 1);"
            }}>
                <img src={searchicon} alt="search" className="w-5 h-5"/>
                <input type='text' style={{direction: "rtl"}} placeholder='جست وجو' className="w-full  Faceface fontface"/>
            </section>

            <section className={style.borderbox} style={{width: "11.6667vw",paddingTop:"10px",paddingBottom:"10px"}}>
                <img src={usericon} className="w-5 h-5"/>
                <p className="Faceface text-textitemcolor" style={{width:"108px",fontSize:"0.9vw",direction:"rtl"}} >ورود به پنل کاربری</p>
            </section>
        </div>
    );
}

export default SearchApp;