var tab; //элементы массива
var tabContent;

window.onload = function(){
    tabContent = document.getElementsByClassName('tabContent'); //получаем массивы из классов
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1); //скрытие вкладок
}

function hideTabsContent(a){ //скрытие вкладок
    for(var i=a; i<tabContent.length; i++){ //от параметра вызова функции до окончания массива табконтент
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(event){ //по заголовку клика мышью
    var target = event.target;
    if(target.className == 'tab'){
        for(var i=0; i<tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b){
    if(tabContent[b].classList.contains('hide')){ //проверка на клик .hide
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}