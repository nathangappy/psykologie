const GhostContentAPI = require('@tryghost/content-api');

// Get Blog Posts
const getPosts = async slug => {
  const api = new GhostContentAPI({
    url: 'https://psykologie.ghost.io',
    key: '602233069f0e6067f93990550e',
    version: 'v3'
  });
  const res = await api.posts.read({ slug, include: 'tags,authors' });
  return res;
};

module.exports = getPosts;
