// Core Dependencies
const express = require('express');

// Utility FUnctions
const getPosts = require('./utils/getPosts');
const getPost = require('./utils/getPost');
const sendMessage = require('./utils/sendMessage');
const forceHttps = require('./utils/forceHttps');
const subscribe = require('./utils/subscribe');

const app = express();

app.use(express.static('public'));
app.use(forceHttps)
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// posts page
app.get('/', async (req, res) => {
  const posts = await getPosts();
  const {pagination} = posts.meta;
  res.render('pages/posts', { posts, pagination });
});

// post page
app.get('/posts/:slug', async (req, res) => {
  const post = await getPost(req.params.slug);
  res.render('pages/post', { post });
});

// about page
app.get('/about', (req, res) => {
  res.render('pages/about');
});

// contact page
app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

// handle contact
app.post('/submit-form', (req, res) => {
  sendMessage(req)
  res.render('pages/contact');
});

// subscribe user
app.post('/subscribe', async (req, res) => {
  subscribe(req)
  const posts = await getPosts()
  res.render('pages/posts', {posts});
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server is up on port 3000');
});
