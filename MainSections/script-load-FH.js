// هدر

fetch("MainSections/header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data;

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // انیمیشن همبرگری
        hamburger.classList.toggle('active');
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px) translateX(5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px) translateX(5px)';
        } else {
            spans[0].style.transform = 'rotate(0) translateY(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translateY(0)';
        }
    });

    // بستن منو با کلیک بیرون
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'rotate(0) translateY(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translateY(0)';
        }
    });
});

// فوتر

const footer = document.getElementById("footer")
fetch("MainSections/footer.html")
.then(res => res.text())
.then(data =>{
    document.getElementById("footer").innerHTML = data;
})