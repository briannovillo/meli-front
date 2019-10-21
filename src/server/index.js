import Express from 'express';
import handleRender from './handleRender';

const app = Express();
const port = process.env.PORT || 3000;

// Set server static folder
app.use('/dist', Express.static('dist'));

// Register routes handler
app.use(handleRender);

// Listen out for incoming requests
app.listen(port, () => {
  console.log('App listening on port', port);
});
