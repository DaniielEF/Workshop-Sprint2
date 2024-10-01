import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import RestoreIcon from '@mui/icons-material/Restore';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const BottomNavigationBar = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();


  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Navegación por las rutas correspondientes
    switch (newValue) {
      case 0:
        navigate('/home');
        break;
      case 1:
        navigate('/search');
        break;

      case 2:
        navigate('/post');
        break;
      case 3:
        navigate('/notification');
        break;
        case 4:
          navigate('/profile');
          break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{ width: '100%', position: 'fixed', bottom: 0 }}
    >
      <BottomNavigationAction icon={<HomeOutlinedIcon />} />
      <BottomNavigationAction icon={<SearchIcon />} />
      <BottomNavigationAction icon={<Fab color="primary" aria-label="add"> <AddIcon /> </Fab>} />

      <BottomNavigationAction icon={<RestoreIcon />} />
      <BottomNavigationAction icon={<PersonOutlineOutlinedIcon />} />
    </BottomNavigation>
  );
}

export default BottomNavigationBar;