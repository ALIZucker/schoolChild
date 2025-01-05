import React from 'react';
import styles from './style.module.css';
import imgHumberger from '../../../public/icon/icons8-menü-50.png'
import Image from "next/image";
import Link from "next/link";
function MenuApp(props) {
    return (
        <div className="flex flex-row-reverse items-center">
            <div className="flex flex-row-reverse gap-[2.1vw] cursor-pointer lg:hidden">
                <Image alt="image" src={imgHumberger} className="w-[8vw] h-[4vh] object-cover" />
            </div>
            <ul className="hidden w-[400px] cursor-pointer lg:flex flex-row-reverse gap-[2.2222vw] text-text18 fontface text-textitemcolor"
                style={{fontWeight: "500"}}>
                <li className={styles.hoverMenu}><Link href="/">خانه</Link></li>
                <li className={styles.hoverMenu}><Link href="/shop">فروشگاه</Link></li>
                <li className={styles.hoverMenu}><Link href="/article">مقالات</Link></li>
                <li className={styles.hoverMenu}> درباره ما</li>
            </ul>
        </div>

    );
}

export default MenuApp;