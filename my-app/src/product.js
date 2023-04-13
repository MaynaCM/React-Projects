import './App.css';

function Product(props) {
  return (
    <div>
      <p class="text-primary uppercase font-bold">sneaker company</p>
      <h1 class="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
      <p class="text-LigthGrey">
          These low-profile sneakers are your perfect casual wear companion.Fetauring a durable
          outer sole, they'll withstand everything the weather can offer.
      </p>
      <div class="flex flex-row mt-10 items-center">
        <span class="text-black text-3xl font-bold">${props.price}</span>
        <span class="bg-primary bg-secondary text-primary font-bold mt-autor px-3 rounded-md ml-5">{props.descount}%</span>
      </div>
    </div>
  );
}

export default Product;
