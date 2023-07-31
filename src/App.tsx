import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box, { BoxProps } from '@mui/material/Box';
import './App.css'

type optionType = {label: string, value: string}

function App() {
  const [count, setCount] = useState('')
  const [inputX, setInputX] = useState('')
  const [inputY, setInputY] = useState('')
  const [operator, setOperator] = useState('')

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
          id="outlined-required"
          placeholder="input value X"
          onChange={handleInputXChange}
        />
      <div className='operation-select'>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Operator" 
            onChange={handleInputOpChange}
            >
              <MenuItem value={'add'}>*</MenuItem>
              <MenuItem value={'minus'}>-</MenuItem>
              <MenuItem value={'multiply'}>*</MenuItem>
              <MenuItem value={'divid'}>/</MenuItem>
        </Select>
      </div>
      
      <input value={inputX} onChange={handleInputXChange} className='xInput'></input>
      <select >
        <option value='add'>
          +
        </option>
        <option value='minus'>
          -
        </option>
        <option value='multiply'>
          *
        </option>
        <option value='divide'>
          /
        </option>
      </select>
      </Box>
    </>
  )
}

export default App
