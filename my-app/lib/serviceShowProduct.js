import {bookPost, newpost} from "../lib/Data";
import {list} from "postcss";

export class postShow {
     value="";

    static setShowProductModal(showProductModal) {
        this.value = showProductModal;

    }
    static getname(){
        return this.value;
    }

    static getShowProductModal() {


    }
}