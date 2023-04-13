import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from './img/image-product-1.jpg';

function ProdImg(){
    return(
    <div>
        <div>
            <img src={image} />
        </div>
    </div>
    );  
}

export default ProdImg;