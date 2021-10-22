import { Switch, Route } from 'react-router-dom';
import { Home } from '../../views/home.view';

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);
