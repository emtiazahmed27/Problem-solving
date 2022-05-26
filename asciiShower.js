function asciiShow(...str1){
    for(j=0;j<str1.length;j++){
        let ascii=[];
        let output=[];
        let str=str1[j];
        for(let i=0;i<str.length;i++){
            ascii[i]=str[i].charCodeAt();
            output[i]=ascii[i];
        }
        console.log(output);
    }
}
asciiShow('tanvir', 'emtiaz','Anzum');