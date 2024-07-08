import { useEffect, useState } from 'react';
import { Container, Box, Button } from '@mui/material';
import { PlayCircleFilledWhite as PlayIcon } from '@mui/icons-material';

import { Guess, Keyboard, History, Controls } from './';

const Game = () => {
  const [number, setNumber] = useState([3, 5, 1, 7]);
  const [history, setHistory] = useState([]); // format: {number: [3, 2, 6, 1], plus: 1, minus: 1}
  const [inputs, setInputs] = useState(Array(number.length).fill(''));
  const [activeInput, setActiveInput] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const inputHandler = ({ index = activeInput, value }) => {
    setInputs(inputs.map((input, i) => (i === index ? value : input)));
  };

  useEffect(() => {
    let nextInput = inputs.findIndex(input => input === '');

    if (nextInput !== -1) {
      setActiveInput(nextInput);
      return;
    }

    // Guess completed below
    let isCorrect = inputs.every((input, i) => parseInt(input) === number[i]);
    console.log(isCorrect, inputs, number);
    if (isCorrect) {
      console.log('haha!'); // TODO: finish game
      setIsCompleted(true);
      return;
    }

    // Guess is wrong, so...
    // check result
    let plus = 9, minus = 9;
    // TODO: calculate the result

    // go next guess
    setHistory([
      {
        inputs,
        plus,
        minus,
      },
      ...history,
    ]);
    setInputs(Array(number.length).fill(''));
    setActiveInput(0);
  }, [inputs, number, history]);

  const restart = () => {
    setNumber([3, 5, 1, 7]);
    setInputs(Array(number.length).fill(''));
    setActiveInput(0);
    setIsCompleted(false);
    setHistory([]);
  };

  return (
    <Container
      sx={{
        position: 'relative',
        height: '100%',
        padding: '0!important',
      }}
    >
      <Guess
        inputs={inputs}
        inputHandler={inputHandler}
        activeInput={activeInput}
        isCompleted={isCompleted}
      />
      {!isCompleted && (
        <>
          <History history={history} />
          <Keyboard inputHandler={inputHandler} />
        </>
      )}
      {isCompleted && (
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '392px',
          }}
        >
          <Box
            component="iframe"
            src="https://embed.lottiefiles.com/animation/99911"
            sx={{
              border: 'none',
            }}
          ></Box>
          <Button
            onClick={restart}
            variant="contained"
            endIcon={<PlayIcon />}
            sx={{
              backgroundColor: 'green',
              width: '150px',
            }}
          >
            Play Again
          </Button>
        </Container>
      )}
      <Controls />
    </Container>
  );
};

export default Game;
