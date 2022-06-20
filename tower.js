// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

function towerBuilder(nFloors) {
    let stars, spaces;
    let tower=[];
    for(let i=1; i<=nFloors; i++){
        spaces=" ".repeat(nFloors-i);
        stars="*".repeat((2*i)-1);
        tower.push(`${spaces} ${stars} ${spaces}`);
    }
    return tower;
  }
  console.log(towerBuilder(6));
