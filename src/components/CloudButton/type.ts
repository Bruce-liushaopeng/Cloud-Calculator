import {ButtonProps} from '@mui/material/Button';
import { CloudServiceType } from '../../api/type';

interface ICloudButtonProps extends ButtonProps {
    cloudService: CloudServiceType,
}

type validationResultType = {
    isValid: boolean,
    message: string
}

const BUTTON_ID_LOOKUP = {
    "AWS": "awsButton",
    "GOOGLE": "googleButton"
}

const BUTTON_IMAGE_LOOKUP = {
    "AWS": "./awsLogo.jpeg",
    "GOOGLE": "./googleLogo.png"
}

const BUTTON_ALT_LOOKUP = {
    "AWS": "awsLogo",
    "GOOGLE": "awsLogo"
}


export type { ICloudButtonProps, validationResultType }
export { BUTTON_ID_LOOKUP, BUTTON_IMAGE_LOOKUP, BUTTON_ALT_LOOKUP }
