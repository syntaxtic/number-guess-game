const check = (req, res) => {
  if (req.method !== 'POST') {
    res.status(200).json('Ugly request. Please make POST request.');
  }

  const input = req.body.input;

  res.status(200).json({ input, plus: 4, minus: 1, correct: false });
};

export default check;
