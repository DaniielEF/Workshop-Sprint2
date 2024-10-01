//eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar } from '@mui/material';
import { getData } from '../helpers/peticiones';

const Post = () => {
    const { id } = useParams(); 
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      async function fetchPost() {
          const postResponse = await getData(`http://localhost:3000/posts/${id}`);
          setPost(postResponse);
  
          // Mueve esto dentro de un useEffect separado o agrega un check
          if (postResponse) {
              const userResponse = await getData(`http://localhost:3000/users/${postResponse.idUser}`);
              setUser(userResponse);
          }
      }
  
      fetchPost();
  }, [id]);
  

    if (!post || !user) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{ padding: '16px' }}>
            <Avatar alt={user.name} src={user.photo} sx={{ width: 56, height: 56 }} />
            <Typography variant="h6">{user.name}</Typography>
            <img src={post.image} alt={post.description} style={{ borderRadius: '10px', width: '100%' }} />
            <Typography variant="body1">{post.description}</Typography>
            <Typography variant="body2">Likes: {post.likes}</Typography>
            <Typography variant="body2">Comments: {post.comments.length}</Typography>
            <Typography variant="body2">Shares: {post.shared}</Typography>
            <Box>
                <Typography variant="body2" color="textSecondary">Write a comment...</Typography>
            </Box>
        </Box>
    );
};

export default Post;
