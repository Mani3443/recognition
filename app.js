import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentDashboard from './components/StudentDashboard';
import StudentForm from './components/StudentForm';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={StudentDashboard} />
                    <Route path="/add" component={StudentForm} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
