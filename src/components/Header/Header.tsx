
import { Box, IconButton, Link } from '@mui/material'
import useHeader from './hook'
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaGithub } from 'react-icons/fa';
function Header(){
    const { headerStyleProps } = useHeader()
  return (
    <>
        <Box sx={headerStyleProps}>
            <img src='./logo.png' />
            <IconButton size="small" >
                <FaGithub className="svg_icons" size = {'2em'}/>
            </IconButton>
        </Box>
        
    </>
  )
}

export default Header
