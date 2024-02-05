console.log("AJAX");
let backupBtn = document.getElementById("backupBtn");
let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", fetchData);
function fetchData(category) {
  // create xhr() object
  const xhr = new XMLHttpRequest();

  // open the object
  xhr.open(
    "GET",
    category === "Electronics"
      ? "https://fakestoreapi.com/products/category/electronics"
      : "https://fakestoreapi.com/products/category/jewelery",
    true
  ); //true means async

  // what to do on progress
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  // when everything(response) is ready
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // handle the fetched data
      document.getElementById("data-container").innerHTML =
        "<p>" + xhr.responseText + "</p>";
    } else {
      // Error - handle the error
      console.log("Error fetching data. Status:", xhr.status);
    }
  };
  xhr.onerror = function () {
    console.log("Network error occurred");
  };
  // send the request
  xhr.send();
}
