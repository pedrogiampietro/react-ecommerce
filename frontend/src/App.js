import { Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { NotFound } from './components/NotFound';
import { Shop } from './views/Shop';
import { SingleProduct } from './components/SingleProduct';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}
