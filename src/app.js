const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { response } = require('express')
const port = process.env.PORT || 3000


const publicDirectory = path.join(__dirname, '../public')
const templatePath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views',templatePath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectory))

app.get('', (req,res) =>{
    res.render('index',{
        firstName:"Aashish",
        lastName: "Kumar",
        title:"Homepage"
    })
})

app.get('/help',(req, res) =>{
    res.render('help', {
        option: "--help",
        key_1: "Press F1 to clear",
        title:"Help page"
    })
})




// app.get('/about',(req,res) =>{
    //     res.send({
        //         name: "Aashish",
        //         age:27
        //     })
        // })
 app.get('/weather',(req,res) =>{

    if(!req.query.address){
        return res.send("Hey!Please add an address")
    }

    geocode(req.query.address, (error,{longitude, latitude} ={}) => {
        if(error) {

            console.log("Error: ", error)
        }
        // console.log("Data: ", longitude, latitude)
        res.send({
            latitude: latitude,
            longitude:longitude,
        })

        // forecast(error, (latitude,longitude) =>{
        //     if(error){
        //             console.log("forecast not found")
        //     }
        //     res.send("Success")
        // })


    })
        })


app.get("/products", (req,res) =>{
    console.log(req.query.api)
    res.send({
        products: []
    })
})

        app.get('/help/*', (req,res) =>{
            res.render('error',{
                title: "Not found",
                body: "Page not found"
            })
        })
        app.get('*', (req,res) =>{
            res.render('error',{
                title:"404 error",
                body:"404 error found"
            })
        })
app.listen(port,() =>{
    console.log("Server started!")
})