const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./apizController')
const cors = require('cors')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/bazar', async (request, response) => {
  controller.getAll()
    .then(clothes => response.send(clothes))
})

servidor.get('/shopcart', async (request, response) => {
  controller.getAllCart()
    .then(clothes => response.send(clothes))
})


servidor.get('/bazar/:id', async (request, response) => {
  const id = request.params.id
  controller.getById(id)
    .then(clothes => response.send(clothes))
})

servidor.post('/bazar', (request, response) => {
  controller.add(request.body)
    .then(clothes => {
      const _id = clothes._id
      response.send(_id)
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

servidor.put('/bazar/:id', async (request, response) => {
  const id = request.params.id
  controller.update(id, request.body)
    .then(response.sendStatus(204))
})

servidor.patch('/shopcart/:id', async (request, response) => {
  const id = request.params.id
  controller.addToCart(id, request.body)
    .then(response.sendStatus(204))
})

servidor.delete('/bazar/:id', (request, response) => {
  controller.remove(request.params.id)
    .then(clothes => {
      if(clothes === null || clothes === undefined){ 
        response.sendStatus(404)
      } else {
        response.sendStatus(204)
      }
    })
    .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      } 
    })
})

servidor.listen(3000)
console.log("servidor rodando na porta 3000")