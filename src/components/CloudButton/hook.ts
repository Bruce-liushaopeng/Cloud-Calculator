import { useState } from "react";
import { validityCheck } from "./util";
import { fetchCalculatorResult } from "../../api/api";
import { API_LOOK_UP, CloudServiceType } from "../../api/type";
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

export default useCloudButton;