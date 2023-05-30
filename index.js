const express = require ('express')
const mssql = require('mssql')
const app = express()

app.use(express.json())

const PORT = 5000 || process.env.PORT



app.listen(PORT, () =>{
    console.log(`Servidor a correr na porta ${PORT}`)
})

const configDB = {
    user: '',
    password: '',
    server: 'LAPTOP-PCFO58ST\SQLEXPRESS',
    database: 'ABD_TRAB1'
    
  };


  mssql.connect(configDB)
  .then(pool =>{
    console.log('Conexão estabelecida')

    return pool.request()
    .query('SELECT * FROM EncLinha')
  })
  .then(result => {
    console.log(result.recordset)
  })
  .catch(err=> console.error('Erro na conexão:', err))

app.get('/', (req, res) =>{

})