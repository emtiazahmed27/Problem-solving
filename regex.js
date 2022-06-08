// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password){
    let res;
    let str=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;
    res=str.test(password);
    return res;
}
console.log(validate("passwor@"));