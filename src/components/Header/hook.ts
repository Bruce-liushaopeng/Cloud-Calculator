import { SxProps } from "@mui/material"

const useHeader = () => {
    const headerStyleProps: SxProps = {
        padding: 3,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    }
    return { headerStyleProps }
}

export default useHeader;

