function myFunction(){
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0]; //Получается ссылка на первый дочерний элемент <a> текущего элемента списка <li>.
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){ //Проверяется, содержит ли текст элемента <a> фильтр, введенный пользователем. Если да, то стиль элемента <li> остается видимым (display = ""), иначе скрывается (display = "none").
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}