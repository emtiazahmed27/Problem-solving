function runRate(target, currentRun, remainingBalls){
    let requiredRun=(target+1)-currentRun;
    let rR=requiredRun/(remainingBalls/6);
    let cR=currentRun/(50-(remainingBalls/6));

    console.log(rR.toPrecision(2));
    console.log(cR.toPrecision(2));
}
runRate(300, 294, 6);
runRate(324,280,17);