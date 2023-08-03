/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 * 
 * sameple: https://us-central1-calculator-394801.cloudfunctions.net/calc?x=2&y=3.1&op=add
 */
exports.calculate = (req, res) => {
    const {x, y, op} = req.query
    const xValue = parseFloat(x);
    const yValue = parseFloat(y);
  
    let ans;
    if (op == 'add') ans = xValue + yValue
    if (op == 'minus') ans = xValue - yValue
    if (op == 'multiply') ans = xValue * yValue
    if (op == 'divide') ans = xValue / yValue
    
    ans = getDecimalCount(ans) < 2 ? ans : ans.toFixed(2)
  
    const resObj = {
        x: x,
        y: y,
        result: ans
    }
    res.status(200).send(resObj);
  };
  
function getDecimalCount(num) {
    if (Math.floor(num) === num) return 0;
    console.log(num.toString().split('.')[1].length)
    return num.toString().split('.')[1].length || 0;
}