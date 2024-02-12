document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'Samsung Galaxy S24 Ultra', price: 1260, rating: 4.5, image: 'galaxy-s24-ultra.jpg' },
        { name: 'Iphone 15 Pro-Max', price: 1089, rating: 3.6, image: 'iphone-15-pro-max.jpg' },
        { name: 'Xiaomi Redmi Note 13 Pro', price: 347, rating: 2.5, image: 'xiaomi-redmi-note-13-pro.jpg' },
        { name: 'Google Pixel 8 Pro 4', price: 612, rating: 3.9, image: 'google-pixel-8-pro.jpg' },
        { name: 'Sony Xperia V1', price: 899, rating: 4.2, image: 'sony-xperia-1-v.jpg' }
    ];

    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
        productDiv.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = product.name;
        productDiv.appendChild(name);

        const price = document.createElement('p');
        price.textContent = 'Price: $' + product.price;
        productDiv.appendChild(price);

        const rating = document.createElement('p');
        rating.textContent = 'Rate: ' + product.rating;
        productDiv.appendChild(rating);

        const button = document.createElement('button');
        button.textContent = 'Add to cart';
        productDiv.appendChild(button);

        productsContainer.appendChild(productDiv);
    });
});
