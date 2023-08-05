
import { Box, IconButton, Tooltip } from '@mui/material'
import useHeader from './hook'
import { FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Zoom from '@mui/material/Zoom';
import './style.css'
function Header(){
    const { headerStyleProps } = useHeader()
    return (  
        <>
            <Box sx={headerStyleProps}>
                <div className='imgContainer'>
                    <img src='./logo.png' height={'70px'} className='logoImg'/>
                </div>
                <Tooltip title="Source" TransitionComponent={Zoom} arrow>
                        <IconButton 
                            size="small" 
                            sx={{padding: 1, marginRight: 1}} 
                            href='https://github.com/Bruce-liushaopeng/Cloud-Calculator'
                            target="_blank">
                            <IconContext.Provider value={{ size: "2rem", className: "contactIcon" }}>
                                <FaGithub className="svg_icons" />
                            </IconContext.Provider>
                        </IconButton>
                </Tooltip>
            </Box>
        </>
    )
}

export default Header
