var bx = document.getElementById("box");

bx.addEventListener('mousedown', function(e1){
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    var cc= "rgb("+c1+","+c2+","+c3+")";
    bx.style.backgroundColor= cc;
    // e1.stopPropagation();
});

    bx.addEventListener('mouseup', function(e2){
    var b1 = Math.floor(Math.random()*256);
    var b2 = Math.floor(Math.random()*256);
    var b3 = Math.floor(Math.random()*256);
    var bb= "rgb("+b1+","+b2+","+b3+")";
    bx.style.backgroundColor= bb;
    // e2.stopPropagation();
});

// rgb('c1+')
