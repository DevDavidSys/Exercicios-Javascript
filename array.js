let vetor = ["a", "b", "a", "a", "b", "c"];
function verifyUnity(){
    for(i = 0;i<vetor.length;i++){
        var unity = 0;
        for(l=0;l<vetor.length;l++){
            if(i ==l){
                continue;
            }
            else if(vetor[i]== vetor[l]){
                unity++;
            }
        }
        console.log(i+ "  "+ l+"  "+ unity);
        if(unity == 0){
            console.log(vetor[i]);
            break;
        }
    }
    
}
verifyUnity();
