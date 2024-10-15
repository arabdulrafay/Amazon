const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control-prev");
const next_btn = document.querySelector(".control-next");

let n = 0;

function changeSlide()
{
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block"
}

changeSlide();

prev_btn.addEventListener("click", (e) => {
    if(n > 0)
    {
        n--;
    }
    else 
    {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener("click", (e) => {
    if(n < imgs.length - 1)
    {
        n++;
    }
    else 
    {
        n = 0;
    }
    changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener("wheel", (evt) => 
    {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}

function abc()
{
    alert(`                         Important Note : Must read 
    "Only these pages are created, and they are working properly."


        Home Page, Signin Page, Signup Page, Cart Page, Headphone Page, Black T-Shirt Page, Water Bottle Page, and 10 kg Dumble Page.....


                            Now see my designing & enjoy.....`)
}

abc();

    const loader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        loader.style.display = "none";
    });