import { Stack, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sidebar, Videos } from './';
import { getVideosFromAPI } from '../redux/videos/videos-slice';
import { Oval } from 'react-loader-spinner';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosFromAPI(selectedCategory));
  }, [dispatch, selectedCategory]);

  const videos = useSelector((state) => state.videos.videos);
  const { isLoading } = useSelector((state) => state.videos);

  if (isLoading) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: '0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}
      >
        <Oval width={50} height={50} />
      </Box>
    );
  }

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          CopyRight 2022 - Kyrillos Hany
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: '#fff',
          }}
        >
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>

        {videos.length > 0 && <Videos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default Feed;
