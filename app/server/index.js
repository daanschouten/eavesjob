import app from './app';

require('dotenv').config()

const port = process.env.PORT || 8080;
const host = process.env.HOST || "http://localhost";

// start server
app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(` ==> 🌎 Listening at ${host}:${port}`)
  }
});
