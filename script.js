fetch("../MainSections/header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});

const ListCartContainer = document.getElementById("cart-list-div");
fetch("page/cart-list-home.html")
.then(response => response.text())
.then(data => {
    ListCartContainer.innerHTML = data;
})
// .catch(error => console.error("خطا در لود فایل لیست کارت", error));

const foter = document.getElementById("foter")
fetch("../MainSections/foter.html")
.then(res => res.text())
.then(data =>{
    document.getElementById("foter").innerHTML = data;
})