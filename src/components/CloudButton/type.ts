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

export type { ICloudButtonProps, validationResultType }
