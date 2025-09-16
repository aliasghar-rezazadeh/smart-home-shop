fetch("../MainSections/header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});
