

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';



function App() {
  return (
    <BrowserRouter> 
    <div className="App">
     <Switch>
     <Route  path="/" component={Home} />
     
     </Switch>
    </div>
    </BrowserRouter> 
  );
}

export default App;
