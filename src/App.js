import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PersonaState  from './context/personas/personaState';
import CategoriaState from './context/categorias/categoriaState';
import LibroState from './context/libros/libroState';
import AlertaState from './context/alertas/alertaState';
// import Layout from './components/layout/Layout';
import Inicio from './components/layout/Title';
import NuevaCategoria from './components/categorias/NuevaCategoria'
import NuevaPersona from './components/personas/NuevaPersona'
import EditarPersona from './components/personas/EditarPersona'
import NuevoLibro from './components/libros/NuevoLibro';
import ListadoCategoria from './components/categorias/ListadoCategoria'
import ListadoPersona from './components/personas/ListadoPersona'
import ListadoLibro from './components/libros/ListadoLibro';
import ListadoLibrosCategoria from './components/libros/ListadoLibrosCategoria';

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  
  return (
    <LibroState>
      <PersonaState>
        <CategoriaState>
          <AlertaState>
            <Router>
              <Switch>
                <Route exact path="/" component= {Inicio} />
                <Route exact path="/nueva-categoria" component={NuevaCategoria}/>
                <Route exact path="/nueva-persona" component={NuevaPersona}/>
                <Route exact path="/persona/:id" component={EditarPersona}/>
                <Route exact path="/nuevo-libro" component={NuevoLibro}/>
                <Route exact path="/listado-categoria" component={ListadoCategoria}/>
                <Route exact path="/listado-persona" component={ListadoPersona}/>
                <Route exact path="/listado-libro" component={ListadoLibro}/>
                <Route exact path="/libros/categoria/:id" component={ListadoLibrosCategoria}/>
              </Switch>
            </Router>
          </AlertaState>
        </CategoriaState>
      </PersonaState>
    </LibroState>
  );
}

export default App;
