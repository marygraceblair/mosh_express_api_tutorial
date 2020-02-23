// This code is from a tutorial made by Programming With Mosh. 
// Find the tutorial here: https://www.youtube.com/watch?v=pKd0Rpw7O48&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=21
const express = require('express'); 
const app = express(); 
app.use(express.json()); 

const courses = [
	{ id: 1, name: 'course1'},
	{ id: 2, name: 'course2'},
	{ id: 3, name: 'course3'},

]; 

app.get('/', (req, res) => {
	res.send('Hello World'); 
}); 

app.get('/api/courses/', (req, res) => {
	res.send(courses); //in the future replace with course objects
}); 

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course wtih the given ID was not found'); 
	res.send(course); 
}); 

app.post('/api/courses', (req, res) => {
	const course = {
		id: courses.length + 1, 
		name: req.body.name
	}; 
	courses.push(course); 
	res.send(course); 
});

// PORT
// This is the proper way to define a port variable. This is considered good practice because
// a hardcoded port might not work on production. 
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`)); 

