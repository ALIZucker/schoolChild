import {postShow} from "../../../lib/serviceShowProduct";
import Image from "next/image";
import {bookPost, newpost} from "../../../lib/Data";
import {list} from "postcss";
import Product from "../../../components/Molecules/showProduct/product";


const page = async ({params, searchParams}) => {

    let list;
    const {id} = (await params)
    const {cont} = (await searchParams)


    if (id === "nawpost") {
        list = newpost;
    } else {
         list =  bookPost;
    }
   const listFilter=list[cont]

    return (
      <>
          <Product listF={listFilter}/>
      </>
    )
}

export default page;