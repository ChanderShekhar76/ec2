const express = require('express')
const app = express()

app.get('/', (req,res)=>{
	res.json({ message : "You are amazing"})
}

app.listen(8080)
