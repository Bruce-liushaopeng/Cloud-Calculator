import { useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './App.css'

type optionType = {label: string, value: string}

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
          required
          id="xInput"
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
              <MenuItem value={'add'}>*</MenuItem>
              <MenuItem value={'minus'}>-</MenuItem>
              <MenuItem value={'multiply'}>*</MenuItem>
              <MenuItem value={'divid'}>/</MenuItem>
        </Select>
      </div>
      <TextField
          required
          id="yInput"
          placeholder="input Y"
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
      <Button variant="contained">Get Result</Button>
    </>
  )
}

export default App
