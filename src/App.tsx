import { useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {fetchCalculatorResult, validityCheck} from './util.ts'
import {useHook} from './hook.ts'
import './App.css'

function App() {
  const [inputX, setInputX] = useState('')
  const [inputY, setInputY] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')
  const [isInputValid, setIsInputValid] = useState(true)
  const [inputValidationMsg, setInputValidationMsg] = useState('')
  const {boxStyleProps, xYTextFieldStyleProps, resultStyleProps, operatorStyleProps} = useHook();

  const handleInputXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputX(event.target.value)
  }
  const handleInputYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputY(event.target.value)
  }
  const handleInputOpChange = (event: SelectChangeEvent) => {
      setOperator(event.target.value)
  }

  const getCalculationResult = async() => {
    const {isValid, message} = validityCheck(inputX, inputY, operator);
    console.log(isValid, message)
    setIsInputValid(isValid)
    setInputValidationMsg(message)
    if (!isValid) return
    const res = await fetchCalculatorResult(inputX, inputY, operator);
    console.log(res)
    const answer = res.data.ans as string
    setResult(answer)
  }

  return (
    <>
    <Box
        sx={boxStyleProps}>
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
            onChange={ handleInputOpChange }
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

export default App
