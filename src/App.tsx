import CalculatorApp from './components/CalculatorApp/CalculatorApp'
import './App.css'
import CalculatorProvider from './CalculatorContext/CalculatorProvider'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header/>
      <CalculatorProvider>
        <CalculatorApp />
      </CalculatorProvider>
    </>
  )
}

export default App
