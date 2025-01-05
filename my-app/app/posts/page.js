'use client'
import React from 'react';

import {useParams, usePathname, useRouter} from "next/navigation";

function Page(props) {
    const params = useParams();
    const pathname = usePathname();
    const router = useRouter();

   // const {id} = params;

    console.log("Params:", pathname); // { id: "123" }
    console.log("Pathname:", pathname); // "/123"


    return (
        <div>
          asdasdasdasd
        </div>
    );
}

export default Page;