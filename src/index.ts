import express from "express";
const port = process.env.port || 8081

const app = express();

app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
} );