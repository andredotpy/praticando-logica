document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0";

function adicionar() {
  let product = document.getElementById("produto").value;
  let productName = product.split("-")[0];
  let productPrice = parseInt(product.split("R$")[1]);
  let quantity = parseInt(document.getElementById("quantidade").value);
  let shoppingCart = document.getElementById("lista-produtos");
  shoppingCart.innerHTML =
    shoppingCart.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantity}x</span> ${productName} <span class="texto-azul">R$${productPrice}</span>
        </section>`;

  let currentTotal = parseInt(
    document.getElementById("valor-total").innerHTML.split("R$")[1]
  );
  let subTotal = quantity * productPrice;
  let total = currentTotal + subTotal;
  let totalText = document.getElementById("valor-total");
  totalText.textContent = `R$ ${total}`;

  document.getElementById("quantidade").value = 0;
}

function limpar() {
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
  document.getElementById("quantidade").value = 0;
}
