const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Courses API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    // res.send(course.category_id);
    const id = req.params.id;
    const selectedCategory = course.filter(c => c.category_id === id);
    res.send(selectedCategory);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(select => select._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Lerning courses server running on port', port);
})