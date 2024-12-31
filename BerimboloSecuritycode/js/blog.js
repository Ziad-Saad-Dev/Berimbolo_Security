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
