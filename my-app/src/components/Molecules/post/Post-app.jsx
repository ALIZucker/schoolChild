import React from 'react';
import img from '../../../img/p1.png'

function PostApp(props) {
    return (
        <div
            className="flex w-[20.2778vw] flex-col h-[57.1429vh] bg-amber-200 rounded-bl-[30px] rounded-br-[30px] rounded-tl-[20px] rounded-tr-[20px]">
            <img src={img} className="m-[8px]"/>
        </div>
    );
}

export default PostApp;