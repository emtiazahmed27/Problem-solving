
//write a code to form a triangle. A triangle has three arm (a,b,c). 
//Any arm being zero will cause invalid input.
function triangle(a,b,c){
    if (a==0||b==0||c==0){
        console.log("invalid input");
    }
    else {
        if(a+b<c||a+c<b||b+c<a)        console.log("triangle can not be formed");
        else                           console.log("triangle can be formed");
    } 
}
triangle(10,9,12);
triangle(1,9,12);
triangle(0,9,12);
