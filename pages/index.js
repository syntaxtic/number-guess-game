import Head from 'next/head';
import { Box, Container } from '@mui/material';

import { Game } from '../components';

const Index = () => {
  return (
    <>
      <Head>
        <title>Number Guess</title>
      </Head>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          padding: '1rem',
          backgroundColor: '#219ebc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container
          fixed
          maxWidth="sm"
          sx={{
            padding: '2rem',
            backgroundColor: '#8ecae6',
            borderRadius: '16px',
          }}
        >
          <Game />
        </Container>
      </Box>
    </>
  );
};

export default Index;
