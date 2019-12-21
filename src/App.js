import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './redux/store';

const Group = lazy(() => import('./container/Group'));
const Gallery = lazy(() => import('./container/Gallery'));

const store = configureStore();
const history = createBrowserHistory();

const commonSuspenseFunc = (SuspenseCom) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <SuspenseCom />
    </Suspense>
  )
}

const MainScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageScreen = styled.div`
  height: 100%;
  padding: 0px 20px;
  width: 100%;
`;

class App extends React.Component {
  render() { 
    return (
      <MainScreen className="mainApp">
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <PageScreen>
              <Switch>
                <Route exact path='/' component={() => <Redirect to="/groups" /> }/>
                <Route path='/groups' component={() => commonSuspenseFunc(Group)} />
                <Route path='/gallery/:id' component={() => commonSuspenseFunc(Gallery)} />
                <Route component={() => <Redirect to="/groups" /> } />
              </Switch>
            </PageScreen>
          </ConnectedRouter>
        </Provider>
      </MainScreen>
    )
  }
}

export default App;
