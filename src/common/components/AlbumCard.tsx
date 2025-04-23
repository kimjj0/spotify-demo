import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import PlayButton from './PlayButton';

interface CardProps {
  name: string;
  image: string;
  artistName: string | undefined;
}

const AlbumCard = ({ image, name, artistName }: CardProps) => {
  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: '16px',
        padding: '12px',
        '&:hover .play-button': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
        <img
          src={image}
          alt="album cover"
          style={{
            borderRadius: '',
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          className="play-button"
          sx={{
            position: 'absolute',
            top: '75%',
            left: '75%',
            transform: 'translate(-50%, -50%) scale(0.95)',
            opacity: 0,
            transition: 'all 0.3s ease-in-out',
            zIndex: 1,
          }}
        >
          <PlayButton />
        </Box>
      </Box>
      <Box sx={{ p: 1, minHeight: 64 }}>
        <Typography
          variant="subtitle1"
          noWrap
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          noWrap
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {artistName}
        </Typography>
      </Box>
    </Card>
  );
};

export default AlbumCard;
