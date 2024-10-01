//eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Typography, Tabs, Tab, Container } from '@mui/material';
import { getData } from '../helpers/peticiones'; 

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const usersUrl = 'http://localhost:3000/users'; 
      const postsUrl = 'http://localhost:3000/posts'; 

      const User = JSON.parse(localStorage.getItem('user'));

      if (User && User.id) {
        const userId = User.id;

        const users = await getData(usersUrl);
        const posts = await getData(postsUrl);

        // Buscar el usuario por ID
        const user = users.find(user => user.id === userId);
        setUserData(user);

        // Filtrar los posts por el id del usuario
        const userPosts = posts.filter(post => post.idUser === Number(userId));
        setUserPosts(userPosts);
      }
    };

    fetchUserData();
  }, []);

  // Asegurar que userData esté cargado antes de renderizar
  if (!userData) {
    return <Typography>Cargando perfil...</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          position: 'relative',
          backgroundImage:`url(${userData.photo})`,
          backgroundSize: 'cover',
          height: '200px',
          borderRadius: '0 0 20px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: 2,
        }}
      >
        <Avatar
          alt={userData.name}
          src={userData.photo || "https://via.placeholder.com/150"}
          sx={{
            width: 100,
            height: 100,
            border: '3px solid white',
            position: 'absolute',
            top: '150px',
          }}
        />
      </Box>

      <Box mt={8} textAlign="center">
        <Typography variant="h6" component="div">
          {userData.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Follow me and like my post!
        </Typography>

        <Box display="flex" justifyContent="space-around" mt={2}>
          <Box textAlign="center">
            <Typography variant="h6">{userData.friends.length} Friends</Typography>
          </Box>
        </Box>

        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>Follow</Button>
          <Button variant="outlined" color="primary">Messages</Button>
        </Box>
      </Box>

      <Tabs centered>
        <Tab label="Photos" />
        <Tab label="Videos" />
        <Tab label="Album" />
        <Tab label="Tag" />
      </Tabs>

      <Box display="flex" flexWrap="wrap" justifyContent="space-between" mt={2}>
        {userPosts.map(post => (
          <Box key={post.id} width="48%" mb={2}>
            <img src={post.image} alt={`Post ${post.id}`} style={{ width: '100%', borderRadius: '10px' }} />
            
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Profile;
