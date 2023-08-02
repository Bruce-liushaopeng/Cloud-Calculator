import { Box, Button, Typography } from "@mui/material";
import { ICloudButtonProps } from "./type";
import { Circle } from "styled-spinkit";
import './style.css'

function CloudButton(
    { onChange, sx, isApiFetching, apiFetchTime, image, alt}:ICloudButtonProps
    ) {
    return(
        <Box>
            <Box className='buttonInnerContainer'>
            <Button
                variant="contained" 
                id="awsButton" 
                onClick={ onChange }
                sx={ sx }>
                Get Result
                <img src={image} width={"33px"} alt={alt} style={{marginLeft: "10px"}}></img>
            </Button>
            <div className='circleFetchTimeContainer'>
                {
                isApiFetching ? <Circle size={27}/>
                    : Boolean(apiFetchTime) ? 
                    <Typography variant='body2'>
                    {`${apiFetchTime} ms`}
                    </Typography>
                    : null
                }
            </div>
            </Box>
        </Box>
    )
}

export default CloudButton;