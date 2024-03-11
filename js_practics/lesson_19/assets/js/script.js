// var screen = window.innerWidth; //width window pc
// var screen = document.body.clientWidth;
// var screen = document.documentElement.clientWidth;
// console.log(screen);

// var screen = window.matchMedia("(max-width:768px)");
// if(screen.matches){ //matches
//     console.log("<768px");
// } else {
//     console.log(">768px");
// }

if(matchMedia){
    var screen = window.matchMedia("(max-width:768px)");
    screen.addListener(changes);
    changes(screen);
}

// function changes(screen){
//     if(screen.matches){
//         console.log("<768px");
//     } else{
//         console.log(">768px");
//     }
// }

function changes(screen){
    var message = (screen.matches ? "less" : "more") + " than 768px";
    document.getElementById("now").firstChild.nodeValue = message;
}