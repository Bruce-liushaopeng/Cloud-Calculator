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
    "GOOGLE": "googleButton",
    "AZURE": "azureButton"
}

const BUTTON_IMAGE_LOOKUP = {
    "AWS": "./awsLogo.jpeg",
    "GOOGLE": "./googleLogo.png",
    "AZURE": "./azureLogo.png"
}

const BUTTON_ALT_LOOKUP = {
    "AWS": "awsLogo",
    "GOOGLE": "googleLogo",
    "AZURE": "azureLogo"
}


export type { ICloudButtonProps, validationResultType }
export { BUTTON_ID_LOOKUP, BUTTON_IMAGE_LOOKUP, BUTTON_ALT_LOOKUP }
