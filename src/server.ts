import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Olá'))

app.listen(3333, () => console.log('Server running!'))
