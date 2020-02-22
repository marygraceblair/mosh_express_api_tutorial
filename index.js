// This code is from a tutorial made by Programming With Mosh. 
// Find the tutorial here: https://www.youtube.com/watch?v=pKd0Rpw7O48&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=21
const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
	res.send('Hello World'); 
}); 

app.get('/api/courses/', (req, res) => {
	res.send([1,2,3]); //in the future replace with course objects
}); 

// PORT
// This is the proper way to define a port variable. This is considered good practice because
// a hardcoded port might not work on production. 
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`)); 
