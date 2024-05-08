import ProductData from './ProductData.mjs';
import ProductListing from './ProductList.mjs';
import Alert from './Alert.mjs';

const productsData = new ProductData('tents');
const productList = new ProductListing('tents',productsData,'.product-list');

productList.init();

const alerts = new Alert();
alerts.init();