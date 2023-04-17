import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Product(props) {
  return (
    <div class="w-10/12">
      <p class="text-primary uppercase font-bold text-sm mb-3">sneaker company</p>
      <h1 class="text-6xl pr-36 font-bold">Fall Limited Edition Sneakers</h1>
      <p class="text-LigthGrey mt-10">
          These low-profile sneakers are your perfect casual wear companion.<br />Fetauring a durable
          outer sole, they'll withstand everything the weather can offer.
      </p>
      <div class="flex flex-row mt-10 items-center mb-2">
        <span class="text-black text-3xl font-bold">${props.price}</span>
        <span class="bg-primary bg-secondary text-primary font-bold mt-autor px-3 rounded-lg ml-5">{props.discount}%</span>
      </div>
      <span class="text-LigthGrey line-through">${props.priceOriginal}</span>
      <div class="flex flex-row gap-6 w-full items-center mt-12">
        <div class="bg-greyish w-3/12 p-2 px-3 flex justify-center rounded-lg font-bold">
          <button class="w-1/12 flex justify-center items-center mr-auto">
            <FontAwesomeIcon icon={faPlus} size="sm"   style={{color: "var(--Orange)",}}/>
          </button>
              <span data-value="0">{props.quantity}</span>
          <button class="w-1/12 flex justify-center items-center ml-auto">
            <FontAwesomeIcon icon={faMinus} size="sm" style={{color:  "var(--Orange)",}} />
          </button>
        </div>
        <button class="bg-primary rounded-lg p-2 px-3 w-5/12 text-white flex justify-center gap-5 items-center">
          <FontAwesomeIcon icon={faCartShopping} size="sm" style={{color: "#ffffff",}} />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
