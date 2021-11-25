var letter = ['a','b','c','d','e','f','g','h','i'];

function randomLetter(){
    min = 0;
    max = letter.length - 1;
    return letter[Math.floor(Math.random() * (max - min + 1)) + min];
}

function formword(){
    var sizeWord = Math.floor(Math.random()*3+3);
    var palavra = "";
    for(i=0;i<sizeWord;i++){
        var Nova = randomLetter();   
        palavra = palavra + Nova;
    }
    
    return palavra;
}

function verifyPalindrome(word){
    var cont = 0;
    for(i=0;i<word.length;i++){
        if(word[i] == word[word.length-i-1]){
            cont++;
        }
    }
    if(cont == word.length){
        return true;

    }
    else{
        return false;
    }

}
var cont_3 = 0;
var cont_4 = 0;
var cont_5 = 0;
var cont = 0;
while(cont <10000){
    var word = formword();
    if(verifyPalindrome(word) == true){
        switch (word.length){
            case 3:
                cont_3++;
                break;
            case 4:
                cont_4++;
                break;
            case 5:
                cont_5++;
                break;
        }
    }
    cont++;
}
console.log(cont_3+" "+ cont_4+ " "+ cont_5)