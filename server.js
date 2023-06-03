const express = require('express');
const fs = require('fs/promises');

const app = express();
const PORT = 3000;

app.get('/:str', async (req, res) => {
  const str = req.params.str;

  try {
    const data = await fs.readFile(`${str}.txt`, 'utf8');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.send('Извините, ваш запрос недоступен');
  }
});
app.listen(PORT, () => {console.log(`Сервер запущен на порту ${PORT}`);});
