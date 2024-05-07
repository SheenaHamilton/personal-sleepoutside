import {renderListWithTemplate} from './utils.mjs';

export function productCardTemplate(product) {
    return `<li class="product-card">
            <a href="product_pages/?product=${product.Id}">
            <img src="${product.Image}" alt="Image of ${product.Name}"/>
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.Name}</h2>
            <p class="product-card__price">${product.FinalPrice}</p></a>
          </li>`;
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;  
    }

    async init() {
        const productList = await this.dataSource.getData();
        const filteredProducts = productList.filter(this.filterList);
        this.renderList(filteredProducts);
    }

    filterList(listitem) {
        const includeTents = ['880RR','985RF','985PR','344YJ'];
        if (includeTents.includes(listitem.Id)) {
            return listitem;
        }
    }

    renderList(list) {
        renderListWithTemplate (productCardTemplate,this.listElement,list);
    }
}
