# Frontend Mercadolibre

Url productiva: http://ec2-18-208-149-131.compute-1.amazonaws.com:3000/items?search=ipad

### Esta es la app de front para la [REST API](https://github.com/briannovillo/meli-api/)

#### Cosas que se tuvieron en cuenta al hacer esta app (y algunas que me hubiera gustado implementar pero quedaron en el tintero por falta de tiempo)

- [x] La app es universal/isomórfica, es decir tiene *Server Side rendering*, que es escencial para el SEO ya que los buscadores recién se estan adaptando a crawlear sitios con render solo en el cliente y no es del todo fiable, además de que no funcionarían los previews de metadata cuando compartimos la url en una red social.
- [x] *Hot reloading* en dev para que se vea al instante el cambio de un archivo, ya que agiliza mucho el desarrollo.
- [x] *Minificado de html* cuando se buildea en prod.
- [x] *Classes css ofuscadas* para reducir el tiempo de parseo del dom, y el tamaño de los css.
- [x] Se utilizó *Redux* como manejador de estado de la aplicación
- [x] Se agregó *ESLint* para estandarizar el estilo del código.
- [ ] Agregar tests con Jest/Enzyme
- [ ] Encarar el maquetado de html y css de forma Mobile first.
- [ ] Poner el CSS critico al principio para la carga Above the fold.

> Este repo se creo en base a [este boilerplate](https://github.com/william-woodhead/simple-universal-react-redux) ya que al tener visibilidad de varias personas en la comunidad esta mas depurado que uno que creemos nosotros mismos y si ocurre algun error en el futuro posiblemente este reportado alli tambien. Solo hay que tener en cuenta que aqui se actualizaron todas las librerias a la ultima version stable y se cambió thunk por Saga que permite manejar mejor flujos complejos de estado.

#### Para iniciar el proyecto en un entorno local

1. Clonar repositorio e instalar dependencias
```
git clone https://github.com/briannovillo/meli-front.git
npm install
```

2. Correr el server con hot reloading (En este modo los estilos se cargan del scss directamente, por eso se ve un parpadeo durante un segundo) 
```
npm run start:dev
```

O en modo producción (con css y js buildeados)
```
npm run start:prod
```

#### Otra documentación útil extraída del boilerplate sobre como es el flujo de Server Side Rendering.

* Todo empieza con la creación del server de Express dentro de *src/server/index.js*

Aquí se puede ver que todos los requests son enviados a la función handleRender():
```
app.use(handleRender);
```

La función handleRender hace varias cosas:

1. Crea un store de redux para cada request
2. Matchea la ruta de req.path con las rutas especificadas en el router de la app (en el archivo src/universal/routes.js)
3. Ejecuta la función loadData() si es que esa ruta tiene una declarada para obtener los datos necesarios para el render.
4. Genera el html con la función renderToString() de react-dom/server
5. Llama a la función renderFullPage() para unir el html y el state de Redux
6. Envía la respuesta al cliente con res.send()

Por último en el cliente que está dentro del archivo *src/client/index.js* se crea un store de Redux para el cliente basado en el state que nos dió el server y se usa la función Hydrate() para actualizar los componentes de React.
