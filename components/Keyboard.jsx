import { Container, Button } from '@mui/material';

const Keyboard = ({ inputHandler }) => {
  return (
    <Container
      sx={{
        padding: '0!important',
      }}
    >
      <BtnRow btns={[0, 1, 2, 3, 4]} inputHandler={inputHandler} />
      <BtnRow btns={[5, 6, 7, 8, 9]} inputHandler={inputHandler} />
    </Container>
  );
};

const BtnRow = ({ btns, inputHandler }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0!important',
      }}
    >
      {btns.map(digit => (
        <Btn key={`kb${digit}`} digit={digit} inputHandler={inputHandler} />
      ))}
    </Container>
  );
};

const Btn = ({ digit, inputHandler }) => {
  return (
    <Button
      sx={{
        width: '64px',
        minWidth: 'unset',
        height: '48px',
        color: '#000',
        fontSize: '1rem',
        border: '1px solid #000',
        margin: '4px',
      }}
      onClick={() => inputHandler({ value: digit })}
    >
      {digit}
    </Button>
  );
};

export default Keyboard;
