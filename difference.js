
//Function shows the difference of a Random Number
let r=Math.ceil( Math.random()*10);
let dif;
function diff(num){
    dif=(Math.abs(r-num));
    console.log(dif);
}
diff(17);
