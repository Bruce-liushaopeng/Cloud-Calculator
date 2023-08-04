import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import NumberInputTextField from '../NumberInputTextField/NumberInputTextField.tsx';
import { Alert, AlertTitle, Grow, Slide, Typography, Zoom } from '@mui/material';
import {useHook} from './hook.ts'
import { operationArray, CLOUD_SERVICE } from './type.ts';
import { useCalculatorContext } from '../../CalculatorContext/useCalculator.ts';
import _ from 'underscore';
import './style.css'
import CloudButton from '../CloudButton/CloudButton.tsx';
import { CloudServiceType } from '../../api/type.ts';


function CalculatorApp() {
  const { xValue, yValue, operator, result, inputValidationMsg, isInputValid, handleInputXChange, handleInputYChange, handleOperatorChange } = useCalculatorContext()
  
  const {boxStyleProps, xYTextFieldStyleProps, resultStyleProps, operatorStyleProps, resultButtonStyleProps} = useHook();

  return (
    <>
    <Box
        sx={boxStyleProps}>
      <NumberInputTextField 
        id="xInput"
        label="X"
        sx={xYTextFieldStyleProps}
        value={xValue}
        onChange={handleInputXChange}
      />
      <div className='operation-select'>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={ handleOperatorChange }
            sx={ operatorStyleProps }
            value={operator}
            >
            {
              _.map(operationArray, ({operatorName, operatorSymbol}) => {
                return <MenuItem value={operatorName}>{operatorSymbol}</MenuItem>
              })
            }
        </Select>
      </div>
      <NumberInputTextField 
        id="xInput"
        label="Y"
        sx={xYTextFieldStyleProps}
        value={yValue}
        onChange={handleInputYChange}
      />
      <p className='equal-sign' >=</p>
      <TextField 
        InputLabelProps={{ shrink: true }} 
        id="result" 
        variant="standard"
        value={result}
        label='result'
        type='tel'
        sx={resultStyleProps} />
      </Box>
      <CloudButton 
        cloudService={CLOUD_SERVICE.AWS as CloudServiceType}
        sx={resultButtonStyleProps}
      />
      <CloudButton 
        cloudService={CLOUD_SERVICE.GOOGLE as CloudServiceType}
        sx={resultButtonStyleProps}
      />
      <CloudButton 
        cloudService={CLOUD_SERVICE.AZURE as CloudServiceType}
        sx={resultButtonStyleProps}
      />
      <Box className='warningBox'>
          <Zoom in={!isInputValid} style={{ transitionDelay: !isInputValid ? '100ms' : '0ms' }}>
            <Alert severity="warning" sx={{width: "400px"}}>
              <AlertTitle>Warning</AlertTitle>
              <strong>{inputValidationMsg}</strong>
            </Alert>
          </Zoom>
      </Box>
    </>
  )
}

export default CalculatorApp
