const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration({
  organization: 'org-9lPC7LJ7FIiEdhazHxmwnnaS',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// create a simple edxpress api that calls the function above

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3080;

app.post('/', async (req, res) => {
  const { message } = req.body;
  console.log(message);
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${message}`,
    max_tokens: 1000,
    temperature: 0.5,
  });

  res.json({
    message: response.data.choices[0].text,
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
