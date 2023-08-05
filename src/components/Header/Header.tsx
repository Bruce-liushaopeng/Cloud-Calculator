
import { Box, IconButton, Link } from '@mui/material'
import useHeader from './hook'
import { FaGithub } from 'react-icons/fa';
import './style.css'
function Header(){
    const { headerStyleProps } = useHeader()
  return (  
    <>
        <Box sx={headerStyleProps}>
            <div className='imgContainer'>
                <img src='./logo.png' height={'70px'} className='logoImg'/>
            </div>
            <Link>
                <IconButton size="small" sx={{padding: 1, marginRight: 1}} >
                    <FaGithub className="svg_icons" size = {'2em'}/>
                </IconButton>
            </Link>
        </Box>
        
    </>
  )
}

export default Header
