

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';



function App() {
  return (
    <BrowserRouter> 
    <div className="App">
     <Switch>
     <Route exact path="/home" component={Home} />
     
     </Switch>
    </div>
    </BrowserRouter> 
  );
}

export default App;
