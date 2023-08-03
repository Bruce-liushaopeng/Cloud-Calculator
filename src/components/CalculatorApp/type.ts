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

const SERVERLESS_PROVIDER= {
    AWS: 'https://3c9e7sa4sl.execute-api.us-east-2.amazonaws.com/dev/calculator',
    GOOGLE: 'https://us-central1-calculator-394801.cloudfunctions.net/calc'
}


export type { validationResultType, ApiResponseType, }
export {operationArray, SERVERLESS_PROVIDER}