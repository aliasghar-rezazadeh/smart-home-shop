
const ListCartContainer = document.getElementById("cart-list-div");
fetch("page/cart-list-home.html")
.then(response => response.text())
.then(data => {
    ListCartContainer.innerHTML = data;
})
// .catch(error => console.error("خطا در لود فایل لیست کارت", error));

