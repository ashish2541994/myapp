
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from './components/dashboard';




function App() {
  return (
     <div className="App">
      
     <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />

        </Switch>
      </Router> 
    </div>
  );
}

export default App;
