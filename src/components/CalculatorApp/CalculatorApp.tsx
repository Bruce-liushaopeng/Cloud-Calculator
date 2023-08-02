import { useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NumberInputTextField from '../NumberInputTextField/NumberInputTextField.tsx';
import { fetchCalculatorResult, validityCheck } from '../../util.ts';
import {useHook} from '../../hook.ts'
import './style.css'
import { useCalculator } from '../../CalculatorContext/useCalculator.ts';

function CalculatorApp() {
  const { xValue, yValue, operator, handleInputXChange, handleInputYChange, handleOperatorChange } = useCalculator()
  const [isInputValid, setIsInputValid] = useState(true)
  const [result, setResult] = useState('')
  const [inputValidationMsg, setInputValidationMsg] = useState('')
  const {boxStyleProps, xYTextFieldStyleProps, resultStyleProps, operatorStyleProps} = useHook();

  const getCalculationResult = async() => {
    const {isValid, message} = validityCheck(xValue, yValue, operator);
    console.log(isValid, message)
    setIsInputValid(isValid)
    setInputValidationMsg(message)
    if (!isValid) return
    const res = await fetchCalculatorResult(xValue, yValue, operator);
    console.log(res)
    const answer = res.data.ans as string
    setResult(answer)
  }

  return (
    <>
    <Box
        sx={boxStyleProps}>
      <NumberInputTextField 
        id="xInput"
        label="Z"
        sx={xYTextFieldStyleProps}
      />
      <TextField
          id="xInput"
          type='tel'
          label="X"
          placeholder="input X"
          onChange={handleInputXChange}
          sx = {xYTextFieldStyleProps}
        />
      <div className='operation-select'>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={ handleOperatorChange }
            sx={ operatorStyleProps }
            >
              <MenuItem value={'add'}>+</MenuItem>
              <MenuItem value={'minus'}>-</MenuItem>
              <MenuItem value={'multiply'}>*</MenuItem>
              <MenuItem value={'divide'}>/</MenuItem>
        </Select>
      </div>
      <TextField
          type='tel'
          id="yInput"
          placeholder="input Y"
          label="Y"
          onChange={ handleInputYChange }
          sx = { xYTextFieldStyleProps }
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
      <Button 
        variant="contained" 
        id="awsButton" 
        onClick={ getCalculationResult }
        sx={{
          fontSize: "20px",
          padding: '5px 15px',
          textTransform: 'none'
        }}>
          Get Result
          <img src="./awsLogo.png" width={"33px"} alt="awsLogo" style={{marginLeft: "10px"}}></img>
        </Button>
      {
        isInputValid ? null: <p>{inputValidationMsg}</p>
      }
    </>
  )
}

export default CalculatorApp
