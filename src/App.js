
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from './components/dashboard';
import Register from './components/Register/Register';
import SuperagentComponet from './components/SuperagentComponet';
import FregmentComponent from './components/Fregment/FregmentComponent';





function App() {
  return (
     <div className="App">
      
     <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/superagentapi" component={SuperagentComponet} />
          <Route exact path="/fregment" component={FregmentComponent} />

        </Switch>
      </Router> 
    </div>
  );
}

export default App;
