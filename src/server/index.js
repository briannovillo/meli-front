import Express from 'express';
import handleRender from './handleRender';

const app = Express();
const port = process.env.PORT || 3000;

// server static content
app.use('/dist', Express.static('dist'));

// register route handler
app.use(handleRender);

// listen out for incoming requests
app.listen(port, () => {
  console.log('App listening on port', port);
});
