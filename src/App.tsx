import CalculatorApp from './components/CalculatorApp/CalculatorApp'
import './App.css'
import CalculatorProvider from './calculatorContext/CalculatorProvider'

function App() {
  return (
    <>
      <CalculatorProvider>
        <CalculatorApp />
      </CalculatorProvider>
    </>
  )
}

export default App
