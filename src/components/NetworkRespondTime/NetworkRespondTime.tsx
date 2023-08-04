import { Typography } from "@mui/material";
import { RespondTimeType } from "./type";
import useNetworkRespondTime from "./hook";

function NetworkRespondTime({ apiFetchTime }: RespondTimeType) {
    const { color } = useNetworkRespondTime(apiFetchTime);
    return (
        <>
            <Typography variant='body2' color={color}>
                {`${apiFetchTime} ms`}
            </Typography>
        </>
    )
}

export default NetworkRespondTime;