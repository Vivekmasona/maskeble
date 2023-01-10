import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { Oval } from 'react-loader-spinner';
import {
  getChannelFromAPI,
  getVideoFromAPI,
} from '../redux/videos/videos-slice';

const ChannelDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelFromAPI(id));
    dispatch(getVideoFromAPI(id));
  }, [dispatch, id]);

  const channel = useSelector((state) => state.videos.channel);

  const video = useSelector((state) => state.videos.video);

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
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channel={channel} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        {video.length > 0 && <Videos videos={video} />}
      </Box>
    </Box>
  );
};

export default ChannelDetails;
