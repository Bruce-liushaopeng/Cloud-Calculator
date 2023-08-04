import { Alert as MuiAlert, AlertTitle, Zoom, Box } from '@mui/material';
import { validationResultType } from '../CloudButton/type';


function Alert({ isValid, message }: validationResultType) {
     return(
        <Box className='alertBox'>
          <Zoom in={!isValid} style={{ transitionDelay: !isValid ? '100ms' : '0ms' }}>
            <MuiAlert severity="warning" sx={{width: "400px"}}>
              <AlertTitle>Warning</AlertTitle>
              <strong>{message}</strong>
            </MuiAlert>
          </Zoom>
      </Box>
    )
}

export default Alert;