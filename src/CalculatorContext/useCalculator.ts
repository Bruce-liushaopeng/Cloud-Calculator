import { useContext } from "react";
import CalculatorContext from "./CalculatorContext";

export function useCalculatorContext() {
    const calculatorContextData = useContext(CalculatorContext);
  
    // check for best practice
    if (calculatorContextData === undefined) {
      throw new Error('useCalculator must be used within a CalculatorProvider');
    }
  
    return calculatorContextData;
  }