import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './components/layout/Layout'
function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component= {Layout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
