import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BillsPage from "../src/pages/BillsPage"
import Dashboard from "../src/pages/DashBoardPage";
// import HomePage from "../../routes/staticRoute";


const App = () => (
  <Router>
    <div>
      <Switch>
        {/* <Route exact path="/" component={HomePage}/> */}
        <Route exact path="/bills" component={BillsPage} />
        <Route exact path="/message" component={Dashboard} />
        {/* <Route exact path="/books/:id" component={Detail} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
