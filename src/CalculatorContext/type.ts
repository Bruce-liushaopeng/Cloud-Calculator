import{ SelectChangeEvent } from '@mui/material/Select';

interface ICalculatorData {
    xValue: string, 
    yValue: string,
    operator: string,
    handleInputXChange: (event: React.ChangeEvent<HTMLInputElement>) => {}
    handleInputYChange: (event: React.ChangeEvent<HTMLInputElement>) => {}
    handleOperatorChange: (event: SelectChangeEvent) => {}
}

export type {ICalculatorData}