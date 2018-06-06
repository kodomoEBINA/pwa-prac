import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './containers/Home';
import store from './modules';
import { simpleAppTheme } from './style';

import Top from './components/Top.jsx';
import Result from './components/Result.jsx';

// export default class App extends React.Component {
//   render() {
//     return (
//       <article>
//         <Router>
//           <Switch>
//             <Route exact path="/" component={Top} />
//             <Route exact path="/result" component={Result} />
//             <Redirect to="/" />
//           </Switch>
//         </Router>
//       </article>
//     );
//   }
// }


// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

// import Home from './containers/Home';
// import store from './modules';
// import { simpleAppTheme } from './style';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={createMuiTheme(simpleAppTheme)}>
          <article>
            <Router>
              <Switch>
                <Route exact path="/" component={Top} />
                <Route exact path="/result" component={Result} />
                <Redirect to="/" />
              </Switch>
            </Router>
          </article>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
