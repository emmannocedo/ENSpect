const hamburgerIcon = document.querySelector('.hamburger');
const navList = document.querySelector('header');

hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('toggle');
    hamburgerIcon.classList.toggle('active');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
//         else {
//             entry.target.classList.remove("show");
//         }
    })
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
