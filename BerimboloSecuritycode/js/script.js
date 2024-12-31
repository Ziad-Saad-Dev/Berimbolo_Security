// add to cart button
let cartCount = 0;
const cartItems = [];
let totalPrice = 0;

// Add to Cart Button Click
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productName = this.getAttribute("data-product");
    const productPrice = parseFloat(this.getAttribute("data-price"));
    const productImage = this.getAttribute("data-image");

    // Add product to cart array
    cartItems.push({
      name: productName,
      price: productPrice,
      image: productImage,
    });
    cartCount++;
    totalPrice += productPrice;

    // Update Cart Count and Total Price
    document.getElementById("cart-count").innerText = cartCount;
    alert(`${productName} added to cart!`);
  });
});

// Cart Click Event
document.getElementById("cart").addEventListener("click", function () {
  const cartDetails = document.getElementById("cart-details");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  // Toggle Cart Details Visibility
  if (
    cartDetails.style.display === "none" ||
    cartDetails.style.display === ""
  ) {
    // Populate Cart Items
    cartItemsContainer.innerHTML = ""; // Clear previous items
    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}  $${item.price.toFixed(2)}</p>
            <button class="remove-item" data-index="${index}">Remove</button>
          `;

      cartItemsContainer.appendChild(cartItem);
    });

    // Update Total Price
    totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;

    // Attach Remove Event Listeners
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", function () {
        const itemIndex = this.getAttribute("data-index");
        const removedItem = cartItems[itemIndex];

        // Update cart and total price
        totalPrice -= removedItem.price;
        cartItems.splice(itemIndex, 1);
        cartCount--;

        // Update DOM
        document.getElementById("cart-count").innerText = cartCount;
        totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
        this.parentElement.remove();

        // Hide cart if empty
        if (cartItems.length === 0) {
          cartDetails.style.display = "none";
        }
      });
    });

    cartDetails.style.display = "block";
  } else {
    cartDetails.style.display = "none";
  }
});






// search products

document.getElementById("searchBlog").addEventListener("input", function (e) {
  const searchText = e.target.value.toLowerCase(); // Get the search text in lowercase
  const blogItems = document.querySelectorAll(".card-content"); // Select all blog items

  blogItems.forEach((item) => {
    const title = item.getAttribute("data-title").toLowerCase(); // Get the title of the blog post
    // Check if the search text matches the title
    if (title.includes(searchText)) {
      item.classList.remove("hidden"); // Show the item if it matches
      item.classList.add("highlight"); // Add a highlight class to visually emphasize it
    } else {
      item.classList.add("hidden"); // Hide the item if it doesn't match
      item.classList.remove("highlight"); // Remove the highlight class if not matching
    }
  });
});
