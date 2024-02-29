var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById("caption");

//обработчик события для щелчка на изображении
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

//закрытия модального окна
var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    // alert("salem!");
    modal.style.display = "none";
}