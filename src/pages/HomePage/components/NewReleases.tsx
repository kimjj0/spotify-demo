import { Grid2, Typography } from '@mui/material';
import React from 'react';
import useGetNewReleases from '../../../hooks/useGetNewReleases';
import LoadingSpinner from '../../../common/components/LoadingSpinner';
import ErrorMessage from '../../../common/components/ErrorMessage';
import AlbumCard from '../../../common/components/AlbumCard';

const NewReleases = () => {
  const { data, error, isLoading } = useGetNewReleases();
  console.log('ddd', data);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage errorMessage={error.message} />;
  }
  return (
    <div>
      <Typography variant="h1" paddingTop="8px">
        New Released Album
      </Typography>
      {data && data.albums.items.length > 0 ? (
        <Grid2 container spacing={2}>
          {data.albums.items.map(album => (
            <Grid2 size={{ xs: 6, sm: 4, md: 2 }} key={album.id}>
              <AlbumCard
                image={album.images[0].url}
                name={album.name}
                artistName={album.artists[0].name}
              />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography variant="h2">No Data</Typography>
      )}
    </div>
  );
};

export default NewReleases;
