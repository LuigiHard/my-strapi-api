module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:5173', 'https://circoteste-810b29740124.herokuapp.com'], // Add your frontend URLs here
    },
  },
});
