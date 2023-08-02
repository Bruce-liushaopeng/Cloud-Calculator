import { AxiosResponse } from "axios"

type validationResultType = {
    isValid: boolean,
    message: string
}

type ApiResponseType = {
    res: AxiosResponse,
    duration: number
}

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

export type { validationResultType, ApiResponseType}
export {operationArray}