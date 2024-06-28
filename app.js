import express from 'express'
import cors from "cors"
import routes from './routes.js'


const app = express()
const port = 3001
const host = 'localhost'

app.use(express.json())
app.use(cors())
app.use(routes)

app.get('/', (req, res) => {
  res.send('API conectada com sucesso!')
})

app.listen(port, host, () => {
  console.log(`✅ Servidor Rodando em: http://${host}:${port}`)
})

