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

const CLOUD_SERVICE = {
    AWS: 'AWS',
    GOOGLE: 'GOOGLE',
    AZURE: 'AZURE'
}

export {operationArray, CLOUD_SERVICE}