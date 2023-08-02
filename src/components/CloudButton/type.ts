import {ButtonProps} from '@mui/material/Button';

interface ICloudButtonProps extends ButtonProps {
    image: string,
    alt: string,
    isApiFetching: boolean,
    apiFetchTime: number,
}

export type { ICloudButtonProps }