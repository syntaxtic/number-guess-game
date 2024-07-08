import { Container, TextField } from '@mui/material';

const Guess = ({ inputs, inputHandler, activeInput, isCompleted }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {inputs.map((val, index) => (
        <Digit
          key={`qd${index}`}
          value={val}
          index={index}
          isActive={index === activeInput}
          inputHandler={inputHandler}
          isCompleted={isCompleted}
        />
      ))}
    </Container>
  );
};

const Digit = ({ value, index, inputHandler, isActive, isCompleted }) => {
  return (
    <TextField
      fullWidth
      value={value}
      disabled={isCompleted}
      inputRef={input => input && isActive && input.focus()}
      onChange={e => inputHandler({ index: index, value: e.target.value })}
      sx={{
        width: '64px',
        margin: '1rem',
        'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        'input[type=number]': {
          MozAppearance: 'textfield',
        },
      }}
      inputProps={{
        maxLength: 1,
        style: {
          fontSize: '2rem',
          padding: '0',
          height: '64px',
          textAlign: 'center',
          caretColor: 'transparent',
        },
      }}
    />
  );
};

export default Guess;
