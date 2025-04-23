import { Button } from '@mui/material';
import { getSpotifyAuthUrl } from '../../utils/auth';
import { CLIENT_ID } from '../../configs/authConfig';

const LoginButton = () => {
  const login = () => {
    getSpotifyAuthUrl();
    console.log(`client id는 ${CLIENT_ID}`);
  };
  return (
    <Button variant="contained" color="secondary" size="large" onClick={login}>
      Login
    </Button>
  );
};

export default LoginButton;
