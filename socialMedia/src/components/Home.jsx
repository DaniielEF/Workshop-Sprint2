//eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import ImgLogo from '../assets/LOGOLOGO 3.png'
import { Avatar, Box, Grid2, Paper, Stack, styled, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { getData } from '../helpers/peticiones';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: '64px',
    height: '64px'

}));
const Home = () => {

    const [friends, setFriends] = useState([])
    const [posts, setPosts] = useState([])


    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user, user.friends)

    useEffect(() => {
        async function getFriends() {
            const response = await getData('http://localhost:3000/users')
            const postResponse = await getData('http://localhost:3000/posts')
            setFriends(response);
            setPosts(postResponse)

        }

        getFriends()

    }, [])

    const friendProfiles = friends.filter((friend) => user.friends.includes(friend.id))

    const friendPosts = posts && user?.friends
        ? posts.filter((item) => user.friends.includes(item.idUser))
        : [];

    console.log(friendProfiles);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid2 container spacing={2}>
                <Grid2 size={9}>
                    <img src={ImgLogo} />
                </Grid2>
                <Grid2 size={3}>
                    <FavoriteBorderOutlinedIcon />  <ForumOutlinedIcon />
                </Grid2>
                <Grid2 size={12} sx={{ display: 'flex', justifyContent: 'center' }}>

                    <Stack direction="row" spacing={2}>
                        {friendProfiles.map((friend) => (
                            <div key={friend.id} style={{ textAlign: 'center' }}>
                                <StyledAvatar alt={friend.name} src={friend.photo} />
                                <Typography variant="caption">{friend.name}</Typography>
                            </div>
                        ))}
                    </Stack>

                </Grid2>
                <Grid2 size={11} sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>



                </Grid2>
            </Grid2>
        </Box>
    );
}

export default Home