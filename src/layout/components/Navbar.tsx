import { Avatar, Box, Button, Menu, MenuItem, styled, Typography } from '@mui/material';
import LoginButton from '../../common/components/LoginButton';
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile';
import React from 'react';
import theme from '../../theme';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const Navbar = () => {
  const { data: userProfile } = useGetCurrentUserProfile();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" height="64px" pr={2}>
      {userProfile ? (
        <ProfileContainer>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ color: theme.palette.common.white, backgroundColor: 'transparent' }}
          >
            {userProfile.images[0] ? (
              <Avatar alt={userProfile.display_name} src={userProfile.images[0].url} />
            ) : (
              <AccountCircleIcon />
            )}
            <Typography variant="body2" ml={1}>
              {userProfile.display_name}
            </Typography>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            PaperProps={{ sx: { width: anchorEl?.offsetWidth || 'auto' } }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.removeItem('access_token');
                window.location.href = '/';
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </ProfileContainer>
      ) : (
        <LoginButton />
      )}
    </Box>
  );
};

export default Navbar;
