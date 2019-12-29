// Mongoose and db connect:
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ds-app-poc', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
// Express configs:
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json());
// Additional requires/configs:
const Request = require('./models/request')
const chalk = require('chalk')
// ------- END REQUIRES AND CONFIGS -------- //



// Create new request
app.post('/request', (req,res) => {
    const request = new Request(req.body)
    request.save().then(request => {
        res.status(201).send('It worked')
        console.log(chalk.green('Saved document to collection.'))
    }).catch(e => {
        console.log(e)
        res.status(400).send(e)
    })
})

// List requests
app.get('/request', (req, res) => {
    Request.find({}).then(requests => {
        res.status(201).send(requests)
    }).catch(e => {
        res.status(500).send(e)
    })
})

// Find request by ID
app.get('/request/:id', (req, res) => {
    Request.findById(req.params.id).then(request => {
        if (!request) {
            return res.status(404).send('Could not find that one')
        }
        res.status(200).send(request)
    }).catch(e => {
        res.status(401).send(e)
    })
})











// !!!!!!!!!!!!!!!!!!!!!!! //
// NOTHING ELSE AFTER THIS //
// !!!!!!!!!!!!!!!!!!!!!!! //
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})