import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";

export function useCalculator() {
    const calculatorContextData = useContext(CalculatorContext);
  
    // check for best practice
    if (calculatorContextData === undefined) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
  
    return calculatorContextData;
  }