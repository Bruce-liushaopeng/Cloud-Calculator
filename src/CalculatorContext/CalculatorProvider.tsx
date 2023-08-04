import React, { useMemo, useState } from 'react';
import { ICalculatorData, IProps } from './type';
import CalculatorContext from './CalculatorContext';
import { SelectChangeEvent } from '@mui/material/Select';

function CalculatorProvider({children}: IProps){
    const [xValue, setxValue] = useState('')
    const [yValue, setYValue] = useState('')
    const [operator, setOperator] = useState('')
    const [isInputValid, setIsInputValid] = useState(true)
    const [inputValidationMsg, setInputValidationMsg] = useState('')
    const [result, setResult] = useState('')

    const handleInputXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setxValue(event.target.value)
    }
    const handleInputYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYValue(event.target.value)
    }
    const handleOperatorChange = (event: SelectChangeEvent) => {
        setOperator(event.target.value)
    }

    // for best practice to prevent rerender when value not change
    const counterContextData: ICalculatorData = useMemo(() => {
        return {
            xValue,
            yValue,
            operator,
            result,
            isInputValid,
            inputValidationMsg,
            handleInputXChange,
            handleInputYChange,
            handleOperatorChange,
            setInputValidationMsg,
            setResult,
            setIsInputValid
        };
    }, [xValue, yValue, operator, inputValidationMsg, result, handleInputXChange, handleInputYChange, handleOperatorChange, setInputValidationMsg, setResult]);

    return (
        <CalculatorContext.Provider value={counterContextData}>
            {children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorProvider
