import { Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
