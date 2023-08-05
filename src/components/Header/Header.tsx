
import { Box, IconButton } from '@mui/material'
import useHeader from './hook'
import { FaGithub } from 'react-icons/fa';
function Header(){
    const { headerStyleProps } = useHeader()
  return (  
    <>
        <Box sx={headerStyleProps}>
            <img src='./logo.png' height={'70px'}/>
            <IconButton size="small" >
                <FaGithub className="svg_icons" size = {'2em'}/>
            </IconButton>
        </Box>
        
    </>
  )
}

export default Header
