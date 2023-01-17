const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  organization: 'org-9lPC7LJ7FIiEdhazHxmwnnaS',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// create a simple edxpress api that calls the function above

const app = express();
const port = 3080;

app.post('/', async (req, res) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({
    data: response.data,
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
