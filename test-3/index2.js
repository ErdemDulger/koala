const slides = document.querySelectorAll('.slide')
const next = document.getElementById("btn-next");
const prev = document.getElementById("btn-prev");
const testimonial = document.querySelectorAll('.testimonial')
const intervalTime = 5000;
const auto = true;
let slideinterval;
let testimonialinterval;


function nextTesti () {
    const activeTesti = document.querySelector('.active2');
    activeTesti.classList.remove("active2");
    if(activeTesti.nextElementSibling){
        activeTesti.nextElementSibling.classList.add("active2");
    }else{
        testimonial[0].classList.add("active2");
    }
}


function nextSlide  () {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if(activeSlide.nextElementSibling){
        activeSlide.nextElementSibling.classList.add("active");
    }else{
        slides[0].classList.add("active");
    }
}

function prevSlide() {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if(activeSlide.previousElementSibling){
        activeSlide.previousElementSibling.classList.add("active");
    }
    else{
        slides[slides.length - 1].classList.add("active");
    }
}

if(auto){
    testimonialinterval = setInterval(nextTesti, 3000);
}

next.addEventListener("click", () => {
    nextSlide();
    if(auto){
        clearInterval(slideinterval);
        slideinterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener("click", () => {
    prevSlide();
    if(auto){
        clearInterval(slideinterval);
        slideinterval = setInterval(nextSlide, intervalTime);
    }
});

if(auto){
    slideinterval = setInterval(nextSlide, intervalTime);
}