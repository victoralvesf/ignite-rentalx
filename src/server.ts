import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('Olá'))

app.post('/course', (req, res) => {
  const { name } = req.body

  return res.json({ name })
})

app.listen(3333, () => console.log('Server running!'))
