//bai 1
function timSo(){
    var count = 0;
    for(var i = 0;i < 10000;i++){
    count+= i;
    
    if(count > 10000){
        var t = i;
        break;
    }
    
    }
    return t;
}
document.getElementById("show").innerHTML = "so nguyen duong nho nhat la :"+ timSo();
//bai 2

function tinhtoan(x,n){
    var count = 0;
    for(var i = 1;i<=n;i++){
       
        count+= x**i;
    }
    return count;
}
document.getElementById("btn1").onclick = function() {
    var x = document.getElementById("n1").value*1;
    var n = document.getElementById("n2").value*1;

   
    document.getElementById("result1").innerHTML =  tinhtoan(x,n);
}
//bai 3
function factorial(n){
    var fac = 1;
    var count = 0;
    for (var i = 1; i<=n;i++){
        fac*= i;
    }
    return fac;
}
document.getElementById("btn2").onclick = function() {
    var a1 = document.getElementById("n3").value*1;
    document.getElementById("result2").innerHTML =  factorial(a1);
}
//bai 4
function makeDiv(){
    var a ="";
    for(var i = 1; i <= 10;i++ ){
        if(i%2 ===0){
            a+= "<div class = \" bg-primary\">so chan</div>"
        }
        else if(i%2 === 1){
            a+= "<div class = \" bg-danger\">so le</div>"
        }
    }
    return a;
}
document.getElementById("btn3").onclick = function() {
     document.getElementById("result3").innerHTML = makeDiv();
}
//bai5
function soNto(n){
    var count = 0;
    if(n < 2){

    }
    else {
        for(var i = 2;i <= Math.sqrt(n);i++){
            if(n%i == 0){
                count++;
            }
        }
        if(count == 0){
            return true;
        }
    }
} 

document.getElementById("btn4").onclick = function() {
    var n = document.getElementById("n4").value*1;
    var a = "";
    for(var i = 2 ; i<=n ;i++){
        if(soNto(i) == true){
            a += " "+i;
        }
    }
    document.getElementById("result4").innerHTML = a;
}