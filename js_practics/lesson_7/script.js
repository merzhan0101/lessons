function myMove(){
    var elem = document.getElementById('myAnimation');
    var pos = 0;
    var id = setInterval(frame, 10); //(функ для вып, интервал в мс)
    function frame(){
        if(pos == 350){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}