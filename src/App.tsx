import { useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import { validationResultType } from './type';
import './App.css'



function App() {
  const [count, setCount] = useState('')
  const [inputX, setInputX] = useState('')
  const [inputY, setInputY] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')

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
    const res = await axios.get(
      'https://3c9e7sa4sl.execute-api.us-east-2.amazonaws.com/dev/calculator', 
      { params: { x: inputX, y: inputY, op: operator} });
    console.log(res)
    const answer = res.data.ans as string
    setResult(answer)
  }

  const validityCheck = ():validationResultType => {
    if (operator == '') {
      return {
        isValid: false,
        message: "Don't forget select operational sign"
      }
    }
    if (operator == '/' && inputY == '0') {
      return {
        isValid: false,
        message: "We can't divide 0 buddy"
      }
    }
    if (inputX == '' || inputY == '') {
      return {
        isValid: false,
        message: "Don't forget give value to X and Y"
      }
    }
    return {
      isValid: true,
      message: "Success"
    }
  }

  return (
    <>
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent:'center',
          alignItems: 'center', 
          m:'2',
          rowGap: '10px'
        }}>
      <TextField
          id="xInput"
          label="X"
          placeholder="input X"
          onChange={handleInputXChange}
          sx = {{
            width: "80px",
            marginRight:'15px'
          }}
        />
      <div className='operation-select'>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleInputOpChange}
            sx={{
              width:'60px',
              marginRight:'15px'
            }}
            >
              <MenuItem value={'add'}>+</MenuItem>
              <MenuItem value={'minus'}>-</MenuItem>
              <MenuItem value={'multiply'}>*</MenuItem>
              <MenuItem value={'divide'}>/</MenuItem>
        </Select>
      </div>
      <TextField
          id="yInput"
          placeholder="input Y"
          label="Y"
          onChange={handleInputYChange}
          sx = {{
            width: "80px",
            marginRight:'20px'
          }}
        />
      <p className='equal-sign' >=</p>
      <TextField 
        id="result" 
        variant="standard"
        value={result}
        contentEditable="false"
        sx={{
          width: 'auto'
        }} />
        
      </Box>
      <Button variant="contained" onClick={getCalculationResult}>Get Result</Button>
    </>
  )
}

export default App
