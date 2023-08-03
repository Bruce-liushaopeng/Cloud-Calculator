import { useState } from "react";
import { fetchCalculatorResult } from "../../api/api";
import { API_LOOK_UP, CloudServiceType } from "../../api/type";
import { validationResultType } from "./type";
function useCloudButton(
    cloudService: CloudServiceType,
    xValue: string, 
    yValue: string, 
    operator: string,
    setIsInputValid: React.Dispatch<React.SetStateAction<boolean>>,
    setInputValidationMsg: (value: React.SetStateAction<string>) => void,
    setResult: (value: React.SetStateAction<string>) => void
    ) {
    const [isApiFetching, setIsApiFetching] = useState(Boolean)
    const [apiFetchTime, setApiFetchTime] = useState(Number)
    
    const getCalculationResult = async() => {
        const {isValid, message} = validityCheck(xValue, yValue, operator);
        console.log(isValid, message)
        setIsInputValid(isValid)
        setInputValidationMsg(message)
        if (!isValid) return
        setIsApiFetching(true)
        console.log('cloudService', cloudService)
        console.log('lookup', API_LOOK_UP[cloudService])
        const {res, duration} = await fetchCalculatorResult(API_LOOK_UP[cloudService], xValue, yValue, operator);
        setApiFetchTime(duration)
        setIsApiFetching(false)
        const answer = res.data.ans as string
        setResult(answer)
      }
    return { isApiFetching, apiFetchTime, getCalculationResult }
}

const validityCheck = (inputX: string, inputY: string, operator: string): validationResultType => {
    if (operator == '') {
      return {
        isValid: false,
        message: "Don't forget select operational sign"
      }
    }
    if (operator == 'divide' && inputY == '0') {
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

export default useCloudButton;