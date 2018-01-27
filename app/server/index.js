import app from './app';

const port = process.env.PORT || 8080;

// start server
app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(` ==> 🌎 Listening at http://localhost:${port}`)
  }
});
