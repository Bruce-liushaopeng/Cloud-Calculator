import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
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
  const handleInputOpChange = (selected?: optionType | null) => {
    if(selected) {
      setOperator(selected.value)
    }
  }

  return (
    <>
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
    </>
  )
}

export default App
