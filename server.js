const express = require('express')
const { Dinosaur, Flavor } = require('./models')
const app = express()

app.get('/', (req, res) => {
    res.send('index!')
})

// Create a route that displays all dinos

app.get('/dinos',async(req,res)=>{
    try{
        const allDinos = await Dinosaur.findAll();
        res.json(allDinos);
      }catch(e){
        res.status(500).json({msg:e.message})
      }
})

// Create a route that displays all flavors

app.get('/flavors', async(req,res)=>{
    try{
        const allFlavors = await Flavor.findAll();
        res.json(allFlavors);
    }catch(e){
        res.status(500).json({msg:e.message})
    }
})

// Create a route that displays a single dino by id Ex: /dinos/id/1 should display json of the dino with an id of 1

app.get('/dinos/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const dino = await Dinosaur.findByPk(id);
        res.send(dino);
    }catch(e){
        res.status(500).json({msg:e.message})
    }
})

// Create a route that displays a single dino by name Ex: /dinos/name/barney should display json of barney the dinosaur

app.get('/dino/:name',async(req,res)=>{
    try{
        const name = req.params.name;
        const dinoName = await Dinosaur.findAll({
            where:{
                name:name
            }
        });
        res.send(dinoName)
    }catch(e){
        res.json(e.message)
    }
})

// Create a route that displays a single flavor by id Ex: /flavors/id/1 should display json of the flavor with an id of 1

app.get('/flavors/:id',async(req,res)=>{
    try{
        const flavorId = req.params.id;
        const flavor = await Flavor.findByPk(flavorId);
        res.send(flavor);
    }catch(e){
        res.status.json({message:e.message})
    }
})

// Create a route that displays a single flavor by name Ex: /flavors/name/lemon should display json of the lemon flavor


app.listen(3000, () => {
    console.log(`running on port 3000!`)
})
