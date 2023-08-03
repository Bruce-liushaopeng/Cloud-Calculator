import{ SelectChangeEvent } from '@mui/material/Select';

interface ICalculatorData {
    xValue: string, 
    yValue: string,
    operator: string,
    isInputValid: boolean,
    inputValidationMsg: string,
    result: string,
    handleInputXChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleInputYChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleOperatorChange: (event: SelectChangeEvent) => void,
    setInputValidationMsg: (value: React.SetStateAction<string>) => void,
    setResult: (value: React.SetStateAction<string>) => void,
    setIsInputValid: React.Dispatch<React.SetStateAction<boolean>>
}

interface IProps {
    children: React.ReactNode;
}

export type { ICalculatorData, IProps }