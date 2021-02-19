import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CategoriaState from './context/categorias/categoriaState';
import Layout from './components/layout/Layout';
import NuevaCategoria from './components/categorias/NuevaCategoria'
import ListadoCategoria from './components/categorias/ListadoCategoria'
function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  
  return (
    <CategoriaState>
      <Router>
        <Switch>
          <Route exact path="/" component= {Layout} />
          <Route exact path="/nueva-categoria" component={NuevaCategoria}/>
          <Route exact path="/listado-categoria" component={ListadoCategoria}/>
        </Switch>
      </Router>
    </CategoriaState>
  );
}

export default App;
