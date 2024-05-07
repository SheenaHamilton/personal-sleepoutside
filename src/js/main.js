import ProductData from './ProductData.mjs';
import ProductListing from './ProductList.mjs';

const productsData = new ProductData('tents');
const productList = new ProductListing('tents',productsData,'.product-list');

productList.init();