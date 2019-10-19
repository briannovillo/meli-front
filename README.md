# Frontend for Mercadolibre

### Cosas que se tuvieron en cuenta al hacer este esta app

1. SSR: Es escencial para el SEO ya que los buscadores recién se estan adaptando a crawlear sitios con render solo en el cliente y no es del todo fiable.
2. Hot reloading en dev para que se vea al instante el cambio de un archivo, ya que agiliza mucho el desarrollo.
3. Minificado de html cuando se buildea en prod.
4. Mobile first.
5. CSS critico above the fold.

### Este repo se creo en base a este boilerplate https://github.com/william-woodhead/simple-universal-react-redux ya que al tener visibilidad de varias personas en la comunidad esta mas depurado que uno que creemos nosotros mismos y si ocurre algun error en el futuro posiblemente este reportado alli tambien. Solo hay que tener en cuenta que aqui se actualizaron todas las librerias a la ultima version stable.

### These are the technologies it uses:

#### For the app

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-router](https://reacttraining.com/react-router/web)
- [Express](http://expressjs.com/)
- [Yarn](https://yarnpkg.com/lang/en/)

#### Build tools

- [Babel for ES6 Javascript](https://babeljs.io/)
- [Webpack 4](https://webpack.js.org/)
- [Sass](http://sass-lang.com/)
- [Nodemon](https://nodemon.io/)
- [ESlint](https://eslint.org/)

## Commands

###### Install

```bash
npm install
```

###### Run in development

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000)

###### Make build

```bash
npm run build
```

###### Run in production

```bash
npm run start
```

Open [localhost:3000](http://localhost:3000)

## Documentation

#### Server side

Everything starts with the Express App.
You can find this in `src/server/index.js`

Here we can see that all requests are routed to the `handleRender` function:

```javascript
app.use(handleRender);
```

**The handleRender function does a number of things:**

1. Create a new redux store on every request from the client
1. Match the request path (`req.path`) to the react router routes specified in `src/universal/routes`
1. Asynchronously fetch the data required to render this route (using the route's `loadData` function)
1. Use react-dom/server `renderToString` function to create the required html
1. Insert the html and redux preloadedState into a full html page using the `renderFullPage` function
1. Send the response to the client `res.send(`

#### Client side

For the client side the index file is `src/client/index.js`

In this file, we use the redux `preloadedState` provided by the server to initialise a client side redux store.

We then use the React `hydrate` function to initialise React on the client side.

In the React components, any asynchronous data is fetched in `componentDidMount`. If data already exists, the component will not make the fetch.

```javascript
componentDidMount() {
  // only fetch the data if there is no data
  if (!this.props.data) this.props.getData();
}
```

In this way, components won't make requests for data if the data has already been requested server side.

#### React Router

The difference in the react tree between server side and client side is as follows:

**Server** `src/server/handleRender.js`

```jsx
<Provider store={store}>
  <StaticRouter location={req.url} context={{}}>
    <Router />
  </StaticRouter>
</Provider>
```

**Client** `src/client/index.js`

```jsx
<Provider store={store}>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
</Provider>
```

Everything else in the entire React tree is the same between server and client.