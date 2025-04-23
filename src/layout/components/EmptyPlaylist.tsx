import React from 'react'
import { Button, styled, Typography, Card } from '@mui/material'


const EmptyPlaylistCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "20px",
  borderRadius: "8px",
}));

const CreateButton = styled(Button)({
  borderRadius: '20px',
  marginTop: "20px",
  fontWeight: "700"
})

const EmptyPlaylist = () => {
  return (
    <EmptyPlaylistCard>
      <Typography variant="h2" fontWeight={700}>Create your first playlist</Typography>
      <Typography variant='body2'>It's easy, we'll help you</Typography>
      <CreateButton variant='contained' color='secondary'>Create playlist</CreateButton>
    </EmptyPlaylistCard>
  )
}

export default EmptyPlaylist