/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.calculate = (req, res) => {
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST');

    if (req.method === "OPTIONS") {
        // stop preflight requests here
        res.status(204).send('');
        return;
    }

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
        ans: ans
    }
    res.status(200).send(resObj);
  };

function getDecimalCount(num) {
  if (Math.floor(num) === num) return 0;
  console.log(num.toString().split('.')[1].length)
  return num.toString().split('.')[1].length || 0;
}