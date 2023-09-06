var anchor_pos;

window.addEventListener('resize', checkViewport);
window.onscroll = function() { scrollF() }

checkViewport();

function checkViewport() {
    let size1 = window.matchMedia('(min-width: 300px)');
    let size2 = window.matchMedia('(min-width: 540px)');
    let size3 = window.matchMedia('(min-width: 768px)');
    let size4 = window.matchMedia('(min-width: 992px)');
    let size5 = window.matchMedia('(min-width: 1200px');

    if (size5.matches) anchor_pos = "20rem";
    else if (size4.matches) anchor_pos = "16rem";
    else if (size3.matches) anchor_pos = "8rem";
    else if (size2.matches) anchor_pos = "6rem";
    else if (size1.matches) anchor_pos = "4rem";
    else anchor_pos = "2rem";

    scrollF()
}

function scrollF() {
    var downanchor = document.getElementById('down-anchor');
    var header = document.getElementById('header');

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) downanchor.style.right = "-100%";
    else downanchor.style.right = anchor_pos;

    if (window.matchMedia('(min-width: 992px)') && (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)) header.classList.add('active');
    else header.classList.remove('active');
}