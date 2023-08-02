
interface IOperator {
    operatorName: string, 
    operatorSymbol: string
}
const operationArray: IOperator[] = [
    {
        operatorName: 'add',
        operatorSymbol: '+'
    },
    {
        operatorName: 'minus',
        operatorSymbol: '-'
    },
    {
        operatorName: 'multiply',
        operatorSymbol: '*'
    },
    {
        operatorName: 'divide',
        operatorSymbol: '/'
    },
]

export { operationArray }