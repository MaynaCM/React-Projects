import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import thumbImg from "./assets/img/images";

function ProdImg(){
    return(
    <div>
        <div class="flex justify-center">
            <img src={thumbImg.product1} class="w-6/12 xl:w-7/12 rounded-xl"/>
        </div>
        <ul id="thumbnail" class="mt-10">
            <li class="w-1/12">
                <img src={thumbImg.thumbProduct1} class="w-full rounded-xl"/>
            </li>
            <li class="w-1/12">
                <img src={thumbImg.thumbProduct2} class="w-full rounded-xl"/>
            </li>
            <li class="w-1/12">
                <img src={thumbImg.thumbProduct3} class="w-full rounded-xl"/>
            </li>
            <li class="w-1/12">
                <img src={thumbImg.thumbProduct4} class="w-full rounded-xl"/>
            </li>
        </ul>
    </div>
    );  
}

export default ProdImg;