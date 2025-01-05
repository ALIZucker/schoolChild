'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {useData} from "../../../app/provider/contextProvider";

function LoginForm(props) {
    const router = useRouter();
    const [name, setName] = React.useState('');
    const [pass, setPass] = React.useState('');

    const {setIsSubmit} = useData();

    const eventHandler = (event) => {
        event.preventDefault();
        if (name.trim() === 'admin' && pass.trim() === 'admin') {
            localStorage.setItem('sharedData', 'admin');
            router.replace('/');
            //window.location.reload();
            console.log("valueeeee")
            setIsSubmit(true);

        }
    }

    return (
        <div className="w-full flex flex-row justify-center  ">
            <form className="w-[70%] bg-orange-200 flex flex-col  items-center gap-5 py-[15vh]">
                <section className="flex flex-col items-end gap-1">
                    <h2 className="Faceface text-text16 ">نام کاربری</h2>

                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}
                           className="Faceface text-text16 Faceface w-[18vw] py-2 px-3 outline-0 rounded-lg border-2 border-gray-100"/>
                </section>
                <section className="flex flex-col items-end gap-1">
                    <h2 className="Faceface text-text16 ">نام کاربری</h2>

                    <input type="text" onChange={(e) => setPass(e.target.value)} value={pass}
                           className="Faceface text-text16 Faceface w-[18vw] py-2 px-3 outline-0 rounded-lg border-2 border-gray-100"/>
                </section>
                <button onClick={eventHandler}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                        <span
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            ثبت اطلاعات
                        </span>
                </button>
            </form>
        </div>
    );
}

export default LoginForm;