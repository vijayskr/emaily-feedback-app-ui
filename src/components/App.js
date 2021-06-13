import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
//Dummy Compents to do the active routing

// const Header = () => {
//   return <h2>Header</h2>;
// };

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

const SurveyNew = () => {
  return <h2>SurveyNew</h2>;
};

const Landing = () => {
  return <h2>Landing</h2>;
};

//Modified to Class Component to get the LifeCycle Methods - Vijay 12 June 2021
const App = () => {
    return (
      <div className="container">
        {/* Left it for the CSS setup later */}
        <BrowserRouter>
          <Header />
          <Route path="/" component={Landing} exact />
          <Route path="/surveys" component={Dashboard} exact />
          <Route path="/surveys/new" component={SurveyNew} exact />
        </BrowserRouter>
      </div>
    );
  }

export default App;
