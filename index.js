const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;
const chef = require('./Data/chef.json')
const recipe = require('./Data/Recipe.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chef)
})

app.get('/recipes', (req, res) => {
    res.send(recipe)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chefsDetails = recipe.find(r => r.chefs_id === id)
    res.send(chefsDetails)
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const recipesDetails = recipe.find(r => r.id === id)
    res.send(recipesDetails)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})