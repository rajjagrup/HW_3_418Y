const express = require('express') // IMPORT express
const app = express() // create an instance of the import.
const port = 3000 // variable to store the port to listen on

//app.get('/', (req, res) => res.send('Hello World!')) // IF you get a GET on '/' send 'Hello World' as a response'

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

//Static files 
app.use(express.static('public'))
app.use('/stylesheets',express.static(__dirname + 'public/stylesheets'))
app.use('/javascripts',express.static(__dirname + 'public/javascripts'))
app.use('/images',express.static(__dirname + 'public/images'))

app.get('',(req, res) =>{
    res.sendFile(__dirname + '/views/static_page_Raj_Jagrup.html')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // make app listen on the port.
