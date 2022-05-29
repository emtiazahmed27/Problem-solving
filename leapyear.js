
// write a code that shows leapyear or not
function leapYear(...year){
    let res;
    for(let i=0; i<year.length; i++){
        if((year[i]%4==0 && year[i]%100!=0)||year[i]%400==0)     res=true;
        else                                                     res=false;
    console.log(res);
    } 
}       
leapYear(2002,2024,3200);


