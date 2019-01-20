const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());



let sneakies= [];
let sneakerIndex=0;

app.get('/api/sneakers', (req, res) => {
    res.send(sneakies);
});

app.post('/api/sneakers', (req,res) => {
    let sneaker = req.body;
    sneaker.id = sneakerIndex++;
    sneakies.push(sneaker);
    res.send({id: sneaker.id});
});

app.delete('/api/sneakers/:id', (req, res) => {
	sneakies = sneakies.filter(sneaker => sneaker.id != req.params.sneakerid);
	res.send(200);
});

app.put('/api/sneakers/:id', (req, res) => {
	let foundSneaker = sneakies.find(sneaker => sneaker.id === req.body.id);
	//update foundSneaker object with new properties. 

	for (let key in req.body){
		foundSneaker[key] =req.body[key]
	}
	res.send(200);
});
	














app.listen(4000, () => console.log("port 4000 working"))

