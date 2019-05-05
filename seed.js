const { Dinosaur, Flavor } = require('./models')

const main = async () => {
    
    await Dinosaur.destroy({ where: {} })
    await Flavor.destroy({ where: {} })

    // Create Dinosaurs
    await Dinosaur.create({
        name: 'rex',
        height: 10000,
        period: 'jurassic'
    })

    await Dinosaur.create({
        name: 'stegosaurus',
        height: 1000,
        period: 'cretaceous'
    })

    await Dinosaur.create({
        name: 'barney',
        height: 6,
        period: 'daycare'
    })

    // Create Flavors
    await Flavor.create({
        name: 'chocolate',
        color: 'brown',
        on_sale: true,
    })

    await Flavor.create({
        name: 'strawberry',
        color: 'pink',
        on_sale: true,
    })

    await Flavor.create({
        name: 'lemon',
        color: 'white',
        on_sale: false,
    })
    
}
const run = async ()=>{
    await main();
    process.exit();
}
run();
