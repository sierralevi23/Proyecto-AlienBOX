document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = document.getElementById('productPrice').value;
    const shortDesc = document.getElementById('productShortDesc').value;
    const longDesc = document.getElementById('productLongDesc').value;
    const imageFile = document.getElementById('productImage').files[0];

    if (name && category && price && shortDesc && longDesc && imageFile) {
        const reader = new FileReader();

        reader.onload = function(e) {
            addProduct(name, category, price, shortDesc, longDesc, e.target.result);
            document.getElementById('productForm').reset();
        };

        reader.readAsDataURL(imageFile);
    }
});

function addProduct(name, category, price, shortDesc, longDesc, imageSrc) {
    const productList = document.getElementById('productList');
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = `${name} image`;

    const details = document.createElement('div');
    details.classList.add('product-details');

    const title = document.createElement('span');
    title.textContent = `${name} - ${category} - $${price}`;
    title.classList.add('product-title');

    const shortDescription = document.createElement('span');
    shortDescription.textContent = shortDesc;
    shortDescription.classList.add('product-short-desc');

    const longDescription = document.createElement('p');
    longDescription.textContent = longDesc;
    longDescription.classList.add('product-long-desc');

    details.appendChild(title);
    details.appendChild(shortDescription);
    details.appendChild(longDescription);

    li.appendChild(img);
    li.appendChild(details);
    productList.appendChild(li);
}
