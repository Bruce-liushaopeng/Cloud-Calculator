import { useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NumberInputTextField from '../NumberInputTextField/NumberInputTextField.tsx';
import { fetchCalculatorResult, validityCheck } from './util.ts';
import {useHook} from './hook.ts'
import { operationArray } from './type.ts';
import { useCalculator } from '../../calculatorContext/useCalculator.ts';
import _ from 'underscore';
import './style.css'
import { Typography } from '@mui/material';

function CalculatorApp() {
  const { xValue, yValue, operator, handleInputXChange, handleInputYChange, handleOperatorChange } = useCalculator()
  const [isInputValid, setIsInputValid] = useState(true)
  const [result, setResult] = useState('')
  const [inputValidationMsg, setInputValidationMsg] = useState('')
  const {boxStyleProps, xYTextFieldStyleProps, resultStyleProps, operatorStyleProps, resultButtonStyleProps} = useHook();
  const [apiFetchTime, setApiFetchTime] = useState(Number)

  const getCalculationResult = async() => {
    const {isValid, message} = validityCheck(xValue, yValue, operator);
    console.log(isValid, message)
    setIsInputValid(isValid)
    setInputValidationMsg(message)
    if (!isValid) return
    const {res, duration} = await fetchCalculatorResult(xValue, yValue, operator);
    setApiFetchTime(duration)
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
      <Box className='buttonOuterContainer'>
        <Box className='buttonInnerContainer'>
          <Button 
            variant="contained" 
            id="awsButton" 
            onClick={ getCalculationResult }
            sx={ resultButtonStyleProps }>
              Get Result
              <img src="./awsLogo.png" width={"33px"} alt="awsLogo" style={{marginLeft: "10px"}}></img>
          </Button>
          {

          }
          <Typography variant='body2'>
            {`${apiFetchTime} ms`}
          </Typography>
        </Box>
      </Box>
      <Box className='validationBox'>
        {
          isInputValid ? null: <Typography className='validationMsg'>{inputValidationMsg}</Typography>
        }
      </Box>
      
    </>
  )
}

export default CalculatorApp
