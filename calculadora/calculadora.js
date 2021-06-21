function soma(n1,n2){
    return n1+n2;
}
function Multiply(){
    return n1*n2;
}
function division(){
    return n1/n2;
}
function subtraction(){
    return n1-n2;
}
window.onload = function(){

        var ba = document.querySelector('.cal');
        ba.addEventListener('click',function(){
                var n1 = document.getElementById('inputValorA');
                n1 = parseInt(n1.value);
                var n2 = document.getElementById('inputValorB');
                n2 = parseInt(n2.value);
                alert(soma(n1,n2));
                
            }
        );
    };


