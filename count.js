
function getConsectiveItems(items, key){
    let arr=items.split('');
     let a=[];
    
     for(let i=0; i<items.length; i++){
         if(arr[i]==key){
             a.push(arr[i]);
         }
     }
     return a;
 }
console.log(getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i'));