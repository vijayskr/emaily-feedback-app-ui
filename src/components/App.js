import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Dummy Compents to do the active routing

const Header = () => {
    return <h2>Header</h2>;
};

const Dashboard = () => {
    return <h2>Dashboard</h2>;
};

const SurveyNew = () => {
    return <h2>SurveyNew</h2>;
};

const Landing = () => {
    return <h2>Landing</h2>;
};

const App = () => {
    return (
        <div> {/* Left it for the CSS setup later */}
        <Header />
            <BrowserRouter>
                <Route path='/' component={Landing} exact />
                <Route path='/surveys' component={Dashboard} exact />
                <Route path='/surveys/new' component={SurveyNew} exact />
            </BrowserRouter>
        </div>
    );
}

export default App;
