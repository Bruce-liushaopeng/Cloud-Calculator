import { AxiosResponse } from "axios"

type ApiResponseType = {
    res: AxiosResponse,
    duration: number
}

const API_LOOK_UP = {
    'AWS': 'https://3c9e7sa4sl.execute-api.us-east-2.amazonaws.com/dev/calculator',
    'GOOGLE': 'https://us-central1-calculator-394801.cloudfunctions.net/calc'
}

const CLOUD_SERVICE = {
    AWS: 'AWS',
    GOOGLE: 'GOOGLE'
}

type CloudServiceType = keyof typeof CLOUD_SERVICE

export type { ApiResponseType, CloudServiceType }
export { CLOUD_SERVICE, API_LOOK_UP }