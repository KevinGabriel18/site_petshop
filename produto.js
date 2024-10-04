function selectProduct(productName) {
    let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    if (!selectedProducts.includes(productName)) {
        selectedProducts.push(productName);
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    }
    window.location.href = 'carrinho.html';
}
