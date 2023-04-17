import React from 'react';
import ReactDOM from 'react-dom';
import Product from './product.js';
import ProdImg from './prodImg.js';

function ProductPage() {
    return (
      <div class="flex justify-center">
        <ProdImg />
        <div  class="flex items-center">
          <Product price="125,00" discount="50" priceOriginal="250,00"/>
        </div>
      </div>
    );
}
  
ReactDOM.render(<ProductPage />, document.getElementById('root'));