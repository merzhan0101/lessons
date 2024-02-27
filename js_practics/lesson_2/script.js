// function fun1(){ //вывод текстом
//     var sel = document.getElementById('mySelect').selectedIndex;
//     var options = document.getElementById('mySelect').options;
//     alert('Выбрана опция: ' + options[sel].text);
// } 

// function fun1(){ //вывод текстом внутри инпут
//     var rng = document.getElementById('r1');
//     var i1 = document.getElementById('i1');
//     i1.value = rng.value;
// }

function fun1(){ //отображение ползунка в виде блока
    var rng = document.getElementById('r1');
    var div = document.getElementById('test');
    div.style.width = rng.value + 'px';
}

