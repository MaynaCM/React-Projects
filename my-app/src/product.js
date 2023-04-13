import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Product(props) {
  return (
    <div>
      <p class="text-primary uppercase font-bold text-sm mb-8">sneaker company</p>
      <h1 class="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
      <p class="text-LigthGrey">
          These low-profile sneakers are your perfect casual wear companion.Fetauring a durable
          outer sole, they'll withstand everything the weather can offer.
      </p>
      <div class="flex flex-row mt-10 items-center">
        <span class="text-black text-3xl font-bold">${props.price}</span>
        <span class="bg-primary bg-secondary text-primary font-bold mt-autor px-3 rounded-lg ml-5">{props.discount}%</span>
      </div>
      <span class="text-LigthGrey line-through">${props.priceOriginal}</span>
      <div class="flex flex-row gap-6">
        <div class="bg-greyish w-1/12 p-2 px-3 flex justify-center rounded-lg font-bold">
          <button class="w-1/12 flex justify-center items-center mr-auto">
            <FontAwesomeIcon icon={faPlus} size="sm"   style={{color: "var(--Orange)",}}/>
          </button>
            0
          <button class="w-1/12 flex justify-center items-center ml-auto">
            <FontAwesomeIcon icon={faMinus} size="sm" style={{color:  "var(--Orange)",}} />
          </button>
        </div>
        <button class="bg-primary rounded-lg p-2 px-3 w-2/12 text-white flex justify-center gap-5 items-center">
          <FontAwesomeIcon icon={faCartShopping} size="sm" style={{color: "#ffffff",}} />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
