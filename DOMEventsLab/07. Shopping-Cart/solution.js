function solve() {

   let addButtons = Array.from(document.getElementsByClassName('add-product'));
   addButtons.forEach(b => b.addEventListener('click', addProduct));

   let checkOutButton = document.querySelector('.checkout');
   checkOutButton.addEventListener('click', checkout);

   let productsList = [];
   let totalPrice = 0;

   let result = document.querySelector('textarea');

   function addProduct(e) {
      let productElement = e.target.parentNode.parentNode;
      let productName = productElement.getElementsByClassName('product-title')[0].textContent;
      let productPrice = Number(productElement.getElementsByClassName('product-line-price')[0].textContent);

      productsList.push(productName);
      totalPrice += productPrice;
      result.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
   }

   function checkout(e) {
      result.textContent += `You bought ${productsList
         .filter((v, i, a) => a.indexOf(v) === i)
         .join(', ')} for ${totalPrice.toFixed(2)}.`;

      addButtons.forEach(b => b.disabled = true);
      checkOutButton.disabled = true;
   }

}