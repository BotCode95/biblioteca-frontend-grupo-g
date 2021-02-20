import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PersonaState  from './context/personas/personaState';
import CategoriaState from './context/categorias/categoriaState';
import Layout from './components/layout/Layout';
import NuevaCategoria from './components/categorias/NuevaCategoria'
import NuevaPersona from './components/personas/NuevaPersona'
import ListadoCategoria from './components/categorias/ListadoCategoria'
import ListadoPersona from './components/personas/ListadoPersona'
function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  
  return (
    <PersonaState>
      <CategoriaState>
        <Router>
          <Switch>
            <Route exact path="/" component= {Layout} />
            <Route exact path="/nueva-categoria" component={NuevaCategoria}/>
            <Route exact path="/nueva-persona" component={NuevaPersona}/>
            <Route exact path="/listado-categoria" component={ListadoCategoria}/>
            <Route exact path="/listado-persona" component={ListadoPersona}/>
          </Switch>
        </Router>
      </CategoriaState>
    </PersonaState>
  );
}

export default App;
