//eslint-disable-next-line no-unused-vars
import React from 'react'
import ImgLogo from '../assets/LOGOLOGO 3.png'
import { Avatar, Box, Grid2, Paper, Stack, styled } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    width:'64px',
    height:'auto'
    
  }));
const Home = () => {

    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user,user.id)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid2 container spacing={2}>
                <Grid2 size={9}>
                    <img src={ImgLogo} />
                </Grid2>
                <Grid2 size={3}>
                    <FavoriteBorderOutlinedIcon />  <ForumOutlinedIcon />
                </Grid2>
                <Grid2 size={12} sx={{display:'flex',  justifyContent:'center'}}>
               
                     <Stack direction="row" spacing={2}>
                        <StyledAvatar alt="Remy Sharp" src="https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg" />
                        <StyledAvatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <StyledAvatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </Stack>
      
                </Grid2>
                <Grid2 size={11}  sx={{display: 'flex', flexWrap: 'wrap', gap: '1rem',justifyContent: 'center'}}>


                    
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default Home