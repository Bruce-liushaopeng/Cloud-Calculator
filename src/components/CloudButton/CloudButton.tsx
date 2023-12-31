import { Box, Button } from "@mui/material";
import { ICloudButtonProps } from "./type";
import { Circle } from "styled-spinkit";
import './style.css'
import { useCalculatorContext } from "../../CalculatorContext/useCalculator";
import useCloudButton from "./hook";
import NetworkRespondTime from "../NetworkRespondTime/NetworkRespondTime";

function CloudButton({ sx, cloudService }:ICloudButtonProps) {
    const { xValue, yValue, operator, setInputValidationMsg, setResult, setIsInputValid} = useCalculatorContext()
    const { isApiFetching, apiFetchTime, buttonId, image, alt ,getCalculationResult } = useCloudButton(cloudService, xValue, yValue, operator,setIsInputValid, setInputValidationMsg, setResult);
    return(
        <Box>
            <Box className='buttonInnerContainer'>
            <Button
                variant="contained" 
                id={buttonId}
                onClick={ () => getCalculationResult() }
                sx={ sx }>
                Get Result
                <img src={image} width={"33px"} alt={alt} style={{marginLeft: "10px"}}></img>
            </Button>
            <div className='circleFetchTimeContainer'>
                {
                isApiFetching ? <Circle size={27}/>
                    : Boolean(apiFetchTime) ? 
                        <NetworkRespondTime apiFetchTime={apiFetchTime}/>
                        : null
                }
            </div>
            </Box>
        </Box>
    )
}

export default CloudButton;