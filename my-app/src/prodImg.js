import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import thumbImg from "./assets/img/images";

function ProdImg(){
    return(
    <div>
        <div>
            <img src={thumbImg.product1} />
        </div>
    </div>
    );  
}

export default ProdImg;