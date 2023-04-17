import React from 'react';
import ReactDOM from 'react-dom';
import Product from './components/product.js';
import ProdImg from './components/prodImg.js';
import Topbar from './components/topbar.js';

function ProductPage() {
    return (
      <div>
        <div id="navWrap">
          <Topbar />
        </div>
        <div class="flex justify-center">
          <ProdImg />
          <div  class="flex items-center">
            <Product price="125,00" discount="50" priceOriginal="250,00"/>
          </div>
       </div>
      </div>
    );
}
  
ReactDOM.render(<ProductPage />, document.getElementById('root'));