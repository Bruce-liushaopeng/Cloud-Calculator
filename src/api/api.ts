import axios from 'axios';
import { ApiResponseType } from './type';

const fetchCalculatorResult = async (serverlessProvider: string, inputX: string, inputY: string, operator: string):Promise<ApiResponseType>=> {
  const sendTime = new Date();
  console.log("BASE URL: " + serverlessProvider)
  const params = { x: inputX, y: inputY, op: operator}
  const res = await axios.get(serverlessProvider, {params});
  const receiveTime = new Date()
  const duration = receiveTime.getTime() - sendTime.getTime()
  const apiRes = { res, duration }
  return apiRes
}

export { fetchCalculatorResult }