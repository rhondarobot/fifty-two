/* Task: Create a function named specialMultiply that takes in 2 parameters
multiplies them together. If only one parameter is used, create an inner
function to take the other parameter */

function specialMultiply(a,b){
    return a && b ? a * b : function (b) {
        return b * a;
    }
}
