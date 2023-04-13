import React from 'react';
import ReactDOM from 'react-dom';
import Product from './product.js';
import ProdImg from './prodImg.js';

function ProductPage() {
    return (
      <>
        <Product price="125,00" discount="50" priceOriginal="250,00" />
        <ProdImg />
      </>
    );
}
  
ReactDOM.render(<ProductPage />, document.getElementById('root'));