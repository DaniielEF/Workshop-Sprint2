//eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ImgLogo from '../assets/LOGOLOGO 3.png';
import { Avatar, Box, Grid2, Stack, styled, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import SendIcon from '@mui/icons-material/Send';
import { getData } from '../helpers/peticiones';
import {  NavLink } from 'react-router-dom';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: '64px',
    height: '64px',
}));

const Home = () => {
    const [friends, setFriends] = useState([]);
    const [posts, setPosts] = useState([]);
    
    let user = JSON.parse(localStorage.getItem('user'));
    
    useEffect(() => {
        async function getFriends() {
            const response = await getData('http://localhost:3000/users');
            const postResponse = await getData('http://localhost:3000/posts');
            setFriends(response);
            setPosts(postResponse);
        }

        getFriends();
    }, []);

    const friendProfiles = friends.filter((friend) => user.friends.includes(friend.id))

    const friendPosts = posts && user?.friends
        ? posts.filter((item) => user.friends.includes(item.idUser))
        : [];

        console.log(friendProfiles);

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid2 container spacing={2}>
                <Grid2 size={9}>
                    <img src={ImgLogo} alt="Logo" />
                </Grid2>
                <Grid2 size={3}>
                    <FavoriteIcon /> <ForumIcon />
                </Grid2>
                <Grid2 size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack direction="row" spacing={2}>
                {friendProfiles.length > 0 ? (
                    friendProfiles.map((friend) => (
                        <div key={friend.id} style={{ textAlign: 'center' }}>
                            <StyledAvatar alt={friend.name} src={friend.photo} />
                            <Typography variant="caption">{friend.name}</Typography>
                        </div>
                    ))
                ) : (
                    <Typography variant="caption">No tienes amigos.</Typography>
                )}
            </Stack>

                </Grid2>
                <Grid2 size={11} sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                    {friendPosts.map((post) => {
                        // Obtener el usuario del post
                        const userPost = friends.find(friend => friend.id === post.idUser);
                        
                        return (
                            <Box
                                key={post.id}
                                sx={{
                                    border: '1px solid #ccc',
                                    borderRadius: '10px',
                                    padding: '10px',
                                    width: '100%', 
                                    maxWidth: '400px', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {/* Parte Superior: Foto y Nombre del Usuario */}
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <StyledAvatar alt={userPost?.name} src={userPost?.photo} />
                                    <Typography variant="body1" sx={{ marginLeft: '10px' }}>
                                        {userPost?.name}
                                    </Typography>
                                </Box>

                                <NavLink to={`/post/${post.id}`}>
                                    <img src={post.image} alt={post.description} style={{ borderRadius: '10px', maxWidth: '100%', cursor: 'pointer' }} />
                                </NavLink>

                              
                                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                                    {post.description}
                                </Typography>

                                {/* Parte Inferior*/}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                    <IconButton>
                                        <FavoriteIcon />
                                        {post.likes}
                                    </IconButton>
                                    <IconButton>
                                        <ForumIcon />
                                        {post.comments.length}
                                    </IconButton>
                                    <IconButton>
                    
                                        <SendIcon />
                                        {post.shared}
                                    </IconButton>
                                </Box>
                            </Box>
                        );
                    })}
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Home;
