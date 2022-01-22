import data from '../data.js';

const merchScreen = {
    render: () => {
        const { products } = data;
        return `
        <ul class="products-card-wrap-external">
            ${products.map( product => `
            <li>
                <div class="card product">
                    <div class="imgbx">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="contentbx">
                        <div class="productName">
                            ${product.name}
                        </div>
                        <div class="price">
                            $<span class="priceValue">${product.price}</span>
                        </div>
                        <button class="btn btn-small addToCart" data-product-id="1"><i class="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                </div>
            </li>
            `
            ).join('\n')}
        `;
    },
};

export default merchScreen;
