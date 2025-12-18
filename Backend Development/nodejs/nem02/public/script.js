async function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const quantity = document.getElementById("quantity").value;
  const description = document.getElementById("description").value;

  await fetch("/add-product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, category, quantity, description }),
  });

  window.location.reload();
}

async function loadAllProducts() {
  const response = await fetch("/products");
  const data = await response.json();
  document.getElementById("root").innerHTML = data.map(
    (item) => `${item.name}`
  ).join('<br>');
}

loadAllProducts();
