// ghost api
const GhostContentAPI = require('@tryghost/content-api');

// Get Blog Posts
const getPosts = async () => {
  const api = new GhostContentAPI({
    url: 'https://psykologie.ghost.io',
    key: '602233069f0e6067f93990550e',
    version: 'v3'
  });
  const res = await api.posts.browse({  filter: 'featured: false', include: 'tags' });
  return res;
};

module.exports = getPosts;
