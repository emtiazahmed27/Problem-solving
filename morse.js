function decodeMorse(str){
    let arr= str.split(' ');
    let arr2=[];
    let count=1;
    for(i=0;i<arr.length;i++){
        if(arr[i]=='....')         arr2.push('H');
        else if(arr[i]=='.-')      arr2.push('A');
        else if(arr[i]=='-…')      arr2.push('B');
        else if(arr[i]=='-.-.')    arr2.push('C');
        else if(arr[i]=='-..')     arr2.push('D');
        else if(arr[i]=='.')       arr2.push('E');
        else if(arr[i]=='..-.')    arr2.push('F');
        else if(arr[i]=='--.')     arr2.push('G');
        else if(arr[i]=='….')      arr2.push('H');
        else if(arr[i]=='..')      arr2.push('I');
        else if(arr[i]=='.---')    arr2.push('J');
        else if(arr[i]=='-.-')     arr2.push('k');
        else if(arr[i]=='.-..')    arr2.push('L');
        else if(arr[i]=='--')      arr2.push('M');
        else if(arr[i]=='-.')      arr2.push('N');
        else if(arr[i]=='---')     arr2.push('O');
        else if(arr[i]=='.--.')    arr2.push('P');
        else if(arr[i]=='--.-')    arr2.push('Q');
        else if(arr[i]=='.-.')     arr2.push('R');
        else if(arr[i]=='…')       arr2.push('S');
        else if(arr[i]=='-')       arr2.push('T');
        else if(arr[i]=='..-')     arr2.push('U');
        else if(arr[i]=='…-')      arr2.push('V');
        else if(arr[i]=='.--')     arr2.push('W');
        else if(arr[i]=='-..-')    arr2.push('X');
        else if(arr[i]=='-.--')    arr2.push('Y');
        else if(arr[i]=='--..')    arr2.push('Z');
    }
    console.log(arr2.join(''));
}
decodeMorse('.... . -.-- .--- ..- -.. .');




// function decodeMorse(str){
//     let arr= str.split(' ');
//     let arr2=[];
//     let count=1;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]=='....')         arr2.push('H');
//         else if(arr[i]=='.-')      arr2.push('A');
//         else if(arr[i]=='-…')      arr2.push('B');
//         else if(arr[i]=='-.-.')    arr2.push('C');
//         else if(arr[i]=='-..')     arr2.push('D');
//         else if(arr[i]=='.')       arr2.push('E');
//         else if(arr[i]=='..-.')    arr2.push('F');
//         else if(arr[i]=='--.')     arr2.push('G');
//         else if(arr[i]=='..')      arr2.push('I');
//         else if(arr[i]=='.---')    arr2.push('J');
//         else if(arr[i]=='-.-')     arr2.push('K');
//         else if(arr[i]=='.-..')    arr2.push('L');
//         else if(arr[i]=='--')      arr2.push('M');
//         else if(arr[i]=='-.')      arr2.push('N');
//         else if(arr[i]=='---')     arr2.push('O');
//         else if(arr[i]=='.--.')    arr2.push('P');
//         else if(arr[i]=='--.-')    arr2.push('Q');
//         else if(arr[i]=='.-.')     arr2.push('R');
//         else if(arr[i]=='…')       arr2.push('S');
//         else if(arr[i]=='-')       arr2.push('T');
//         else if(arr[i]=='..-')     arr2.push('U');
//         else if(arr[i]=='…-')      arr2.push('V');
//         else if(arr[i]=='.--')     arr2.push('W');
//         else if(arr[i]=='-..-')    arr2.push('X');
//         else if(arr[i]=='-.--')    arr2.push('Y');
//         else if(arr[i]=='--..')    arr2.push('Z');
//     }
//     console.log(arr2.join(''));
// }
// decodeMorse('.... . -.-- .--- ..- -.. .');
// decodeMorse('.... . -.-- --..');
 