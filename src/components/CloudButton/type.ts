import {ButtonProps} from '@mui/material/Button';
import { CloudServiceType } from '../../api/type';

interface ICloudButtonProps extends ButtonProps {
    cloudService: CloudServiceType,
    image: string,
    alt: string,
}

type validationResultType = {
    isValid: boolean,
    message: string
}

const BUTTON_ID_LOOKUP = {
    "AWS": "awsButton",
    "GOOGLE": "googleButton"
}

type ButtonIdType = keyof typeof BUTTON_ID_LOOKUP

export type { ICloudButtonProps, validationResultType, ButtonIdType }
export { BUTTON_ID_LOOKUP }
