var letter = ['a','b','c','d','e','f','g','h','i','j','k'];
var cont_pal3 = 0;
var cont_pal4 = 0;
var cont_pal5 = 0;
var cont = 0;

function randomLetter(){
    return Math.floor(Math.random()*(letter.length));
}
function formWord(){
    var lenght = Math.floor(Math.random()*(4))+3;
    var word = "";
    for(var i=1; i<=lenght;i++)
    {   var random = randomLetter();
        var let = letter[random];
        word = word + let;

    }
    return word;
}

function verifyPalindrome(word){
    var size = word.length;
    var cont = 0;
    for(i=0;i < Math.floor(size/2);i++){
        if(word[i] == word[size-1-i]){
            cont++;            
        }
    }
    if (cont == Math.floor(size/2)){
        return true;
    }
    else{
        return false;
    }
}


while(cont < 10000){
    var word = formWord();
    var verification = verifyPalindrome(word);
    if(verification == true){
        if(word.length == 3){
            cont_pal3++;
        }
        else if(word.length == 4){
            cont_pal4++;
        }
        else if(word.lenght == 5){
            cont_pal5++;
        }
    }
    cont++;
}
console.log(cont_pal3+"  "+cont_pal4+"  "+ cont_pal5+"  "+word);
//console.log(cont_pal3,cont_pal4,cont_pal5);
//console.log(word);