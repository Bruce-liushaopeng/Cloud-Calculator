import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ICalculatorData } from './type';
import CalculatorContext from './CalculatorContext';
import { SelectChangeEvent } from '@mui/material/Select';

function CalculatorProvider(children: React.ReactNode): React.ReactNode {
    const [xValue, setxValue] = useState('')
    const [yValue, setYValue] = useState('')
    const [operator, setOperator] = useState('')

    const handleInputXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setxValue(event.target.value)
    }
    const handleInputYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYValue(event.target.value)
    }
    const handleOperatorChange = (event: SelectChangeEvent) => {
        setOperator(event.target.value)
    }

    const counterContextData: ICalculatorData = useMemo(() => {
        return {
            xValue,
            yValue,
            operator,
            handleInputXChange,
            handleInputYChange,
            handleOperatorChange
        };
    }, [xValue, yValue, operator, handleInputXChange, handleInputYChange, handleOperatorChange]);

    return (
        <CalculatorContext.Provider value={counterContextData}>
            {children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorProvider
