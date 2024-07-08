import { Container, Stack, IconButton } from '@mui/material';
import {
  InfoOutlined as InfoIcon,
  SettingsOutlined as SettingsIcon,
  ContentCopy as CopyIcon,
  Twitter as TwitterIcon,
  FacebookOutlined as FacebookIcon,
  Instagram as InstagramIcon,
  Camera as CameraIcon,
} from '@mui/icons-material';

const Controls = () => {
  const buttonHandler = e => {
    console.log('Button clicked');
  };
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px',
      }}
    >
      <Stack direction="row">
        <IconButton onClick={buttonHandler}>
          <CameraIcon
            sx={{ fontSize: '36px', margin: '4px', color: 'black' }}
          />
        </IconButton>
        <IconButton onClick={buttonHandler}>
          <CopyIcon sx={{ fontSize: '36px', margin: '4px', color: 'black' }} />
        </IconButton>
        <IconButton onClick={buttonHandler}>
          <TwitterIcon
            sx={{ fontSize: '36px', margin: '4px', color: 'black' }}
          />
        </IconButton>
        <IconButton onClick={buttonHandler}>
          <InstagramIcon
            sx={{ fontSize: '36px', margin: '4px', color: 'black' }}
          />
        </IconButton>
        <IconButton onClick={buttonHandler}>
          <FacebookIcon
            sx={{ fontSize: '36px', margin: '4px', color: 'black' }}
          />
        </IconButton>
        <IconButton onClick={buttonHandler}>
          <InfoIcon sx={{ fontSize: '36px', margin: '4px', color: 'black' }} />
        </IconButton>
        <IconButton onClick={buttonHandler}>
          <SettingsIcon
            sx={{ fontSize: '36px', margin: '4px', color: 'black' }}
          />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Controls;
