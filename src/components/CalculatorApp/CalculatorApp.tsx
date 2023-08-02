import { useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import NumberInputTextField from '../NumberInputTextField/NumberInputTextField.tsx';
import { Typography } from '@mui/material';
import { fetchCalculatorResult, validityCheck } from './util.ts';
import {useHook} from './hook.ts'
import { operationArray } from './type.ts';
import { useCalculator } from '../../calculatorContext/useCalculator.ts';
import _ from 'underscore';
import './style.css'
import CloudButton from '../CloudButton/CloudButton.tsx';


function CalculatorApp() {
  const { xValue, yValue, operator, handleInputXChange, handleInputYChange, handleOperatorChange } = useCalculator()
  const [isInputValid, setIsInputValid] = useState(true)
  const [result, setResult] = useState('')
  const [inputValidationMsg, setInputValidationMsg] = useState('')
  const {boxStyleProps, xYTextFieldStyleProps, resultStyleProps, operatorStyleProps, resultButtonStyleProps} = useHook();
  const [apiFetchTime, setApiFetchTime] = useState(Number)
  const [isApiFetching, setIsApiFetching] = useState(Boolean)

  const getCalculationResult = async() => {
    const {isValid, message} = validityCheck(xValue, yValue, operator);
    console.log(isValid, message)
    setIsInputValid(isValid)
    setInputValidationMsg(message)
    if (!isValid) return
    setIsApiFetching(true)
    const {res, duration} = await fetchCalculatorResult(xValue, yValue, operator);
    setApiFetchTime(duration)
    setIsApiFetching(false)
    const answer = res.data.ans as string
    setResult(answer)
  }

  return (
    <>
    <Box
        sx={boxStyleProps}>
      <NumberInputTextField 
        id="xInput"
        label="X"
        sx={xYTextFieldStyleProps}
        value={xValue}
        onChange={handleInputXChange}
      />
      <div className='operation-select'>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={ handleOperatorChange }
            sx={ operatorStyleProps }
            value={operator}
            >
            {
              _.map(operationArray, ({operatorName, operatorSymbol}) => {
                return <MenuItem value={operatorName}>{operatorSymbol}</MenuItem>
              })
            }
        </Select>
      </div>
      <NumberInputTextField 
        id="xInput"
        label="Y"
        sx={xYTextFieldStyleProps}
        value={yValue}
        onChange={handleInputYChange}
      />
      <p className='equal-sign' >=</p>
      <TextField 
        id="result" 
        variant="standard"
        value={result}
        label='result'
        type='tel'
        sx={resultStyleProps} />
      </Box>
      <CloudButton 
        onChange={getCalculationResult}
        sx={resultButtonStyleProps}
        isApiFetching={isApiFetching}
        apiFetchTime={apiFetchTime}
        image="./awsLogo.png"
        alt="awsLogo"
      />
      <Box className='validationBox'>
        {
          isInputValid ? null: <Typography className='validationMsg'>{inputValidationMsg}</Typography>
        }
      </Box>
      
    </>
  )
}

export default CalculatorApp
