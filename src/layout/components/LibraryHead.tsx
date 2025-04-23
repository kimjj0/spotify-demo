import { styled, Typography, Button, Box } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';


const Head = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "8px",
  justifyContent: "space-between",
  alignItems: "center",
}))

const LibraryHead = () => {
  const handlePlaylist = () => {

  };
  return (
    <Head>
      <Box display="flex">
        <BookmarkIcon sx={{ marginRight: "20px" }} />
        <Typography variant='h2' fontWeight={700}>Your Library</Typography>
      </Box>
      <Button onClick={handlePlaylist}>
        <AddIcon />
      </Button>
    </Head>
  )
}

export default LibraryHead