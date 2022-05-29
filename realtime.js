
// write a function that will show your time.

function realTime(){
    var today= new Date();
    var date= today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time= today.getHours()+'-'+today.getMinutes()+'-'+today.getSeconds();
    var date_time=date+'||'+time;
    console.log(date_time);
}
realTime();