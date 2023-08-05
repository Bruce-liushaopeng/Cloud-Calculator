import { SxProps } from "@mui/material"

const useHeader = () => {
    const headerStyleProps: SxProps = {
        padding: 3,
        alignItems: 'center',
    }
    return { headerStyleProps }
}

export default useHeader;

