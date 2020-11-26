import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Signup from './Signup';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        
        <Route path="/checkout">
            < Header />
            < Checkout />
        </Route>
        <Route path="/signup">
            < Signup />
        </Route>
        <Route path="/">
            < Header />
            < Home />
        </Route>

      </Switch>
      
      {/* Home*/}
    </div>
    </Router>
  );
}

export default App;
