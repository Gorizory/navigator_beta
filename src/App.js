import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Navigator from './navigator/components/navigator';
import allReducers from './navigator/reducers/index';
import './App.css';

const store = createStore(allReducers);
let nodeId = 0;


const App = () => ( //Тут симуляция раскладки
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/'>
            <Redirect to={'/nav/' + nodeId} push/>
          </Route>
          <Route path='/nav/:nodeId' component={Navigator} />
          <Route path='/doc' component={Navigator}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
