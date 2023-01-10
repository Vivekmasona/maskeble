import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { getDataFromAPI } from './../utils/getDataFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    getDataFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  if (videos === null) {
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
        Search Results for:{' '}
        <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
      </Typography>

      {videos.length > 0 && <Videos videos={videos} />}
    </Box>
  );
};

export default SearchFeed;
