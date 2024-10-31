import React from 'react';
import styles from './style.module.css';
function MenuApp(props) {
    return (
        <ul className="w-[400px] flex flex-row-reverse gap-[2.2222vw] text-text18 fontface text-textitemcolor" style={{fontWeight:"500"}}>
            <li className={styles.hoverMenu}>خانه</li>
            <li className={styles.hoverMenu}>فروشگاه</li>
            <li className={styles.hoverMenu}>مفالات</li>
            <li className={styles.hoverMenu}> درباره ما</li>
        </ul>
    );
}

export default MenuApp;