import{ SelectChangeEvent } from '@mui/material/Select';

interface ICalculatorData {
    xValue: string, 
    yValue: string,
    operator: string,
    handleInputXChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleInputYChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleOperatorChange: (event: SelectChangeEvent) => void
}

export type { ICalculatorData }