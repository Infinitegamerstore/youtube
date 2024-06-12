let selectedProduct = null;
let selectedPayment = null;

function selectProduct(element) {
    if (selectedProduct) {
        selectedProduct.classList.remove('selected');
    }
    selectedProduct = element;
    element.classList.add('selected');
}

function selectPayment(element) {
    if (selectedPayment) {
        selectedPayment.classList.remove('selected');
    }
    selectedPayment = element;
    element.classList.add('selected');
}

function orderNow() {
    const userEmail = document.getElementById('userEmail').value;
    

    if (!userEmail  || !selectedProduct || !selectedPayment) {
        alert('Please fill in all fields and select a product and payment method.');
        return;
    }

    const productInfo = selectedProduct.querySelector('.product-info').innerText;
    const paymentMethod = selectedPayment.querySelector('span').innerText;

    const message = `User Email: ${userEmail}\nProduct: ${productInfo}\nPayment Method: ${paymentMethod}`;
    const whatsappUrl = `https://wa.me/8414075796?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}