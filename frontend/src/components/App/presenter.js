import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import styles from "./styles.scss";
import Footer from "components/Footer";

// class App extends Component {
//   render() {
//     return <div className={styles.App}>
//         <Switch>
//             <Route exact path="/" render={() => "hello!"} />
//             <Route path="/login" render={() => "login!"} />
//         </Switch>
//         <Footer />
//       </div>;
//   }
// }

const App = props => [
  // Nav,
  //Routes,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />, // privateRoute : //Public
  //Footer
  <Footer key={3} />
];

const PrivateRoutes = props => (
    <Switch>
        <Route exact path = "/" render ={ () => "feed"}/>
        <Route exact path = "/explore" render ={ () => "explore"}/>
    </Switch>

)

const PublicRoutes = props => (
    <Switch>
        <Route exact path = "/" render ={ () => "login"}/>
        <Route exact path = "/forgot" render ={ () => "password"}/>
    </Switch> 
)

export default App;
