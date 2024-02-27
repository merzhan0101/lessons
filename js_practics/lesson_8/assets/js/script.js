var slideIndex = 1;
showSlides(slideIndex); //Функция showSlides(slideIndex) вызывается для отображения слайда с индексом slideIndex.

function plusSlides(n){
    showSlides(slideIndex += n);
    //Функция plusSlides(n) принимает аргумент n, который представляет собой значение, на которое нужно изменить текущий индекс слайда.
    //Затем вызывается функция showSlides() с новым значением slideIndex, увеличенным или уменьшенным на n.
}

function currentSlide(n){
    showSlides(slideIndex = n);
    //Функция currentSlide(n) устанавливает текущий слайд в слайд с индексом n.
    //Вызывается функция showSlides() с аргументом n.
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";

    /*
        Функция showSlides(n) отображает слайд с индексом n.
        Сначала проверяется, если n больше количества слайдов, устанавливается slideIndex в 1. Если n меньше 1, slideIndex устанавливается в последний индекс.
        Затем все слайды скрываются с помощью свойства display: none.
        Класс active удаляется у всех точек навигации (dots).
        Отображается текущий слайд и устанавливается класс active для соответствующей точки навигации.
    */
}