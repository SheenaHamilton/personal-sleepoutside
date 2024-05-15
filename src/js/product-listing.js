import ProductListing from './ProductList.mjs';
import ProductData from './ProductData.mjs';
import {loadHeaderFooter, getParams} from './utils.mjs';

loadHeaderFooter();

const category = getParams('category');
const productTitle = document.querySelector('.products h2')

productTitle.textContent = productTitle.textContent + ': ' + category.replace(/-/gi, ' ');

const productsData = new ProductData(category);
const productList = new ProductListing(category, productsData,'.product-list');
productList.init();