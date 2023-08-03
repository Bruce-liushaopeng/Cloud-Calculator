import axios from 'axios';
import { ApiResponseType, validationResultType } from './type';

const fetchCalculatorResult = async (serverlessProvider: string, inputX: string, inputY: string, operator: string):Promise<ApiResponseType>=> {
  const sendTime = new Date();
  console.log(serverlessProvider)
  const res = await axios.get(
    serverlessProvider, 
      { params: { x: inputX, y: inputY, op: operator} });
  const receiveTime = new Date()
  const duration = receiveTime.getTime() - sendTime.getTime()
  console.log(duration)
  const apiRes = { res, duration }
  return apiRes
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

export { fetchCalculatorResult, validityCheck }