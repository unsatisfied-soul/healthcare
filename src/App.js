import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import Singleservice from './Components/Pages/Singleservice/Singleservice';
import Login from './Components/Pages/RegistrationForm/Login';
import Registration from './Components/Pages/RegistrationForm/Registration';
import AuthProvider from './Context/AuthProvider';
import Protect from './Components/ProtectRoute/Protect';
import About from './Components/Pages/About/About';
import Notfound from './Components/Pages/NotFound/Notfound';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (
    <>
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Protect path="/about">
                <About></About>  
              </Protect>
              <Protect path="/service/:serviceId">
                  <Singleservice></Singleservice>
              </Protect>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Registration></Registration>
              </Route>
              <Protect path="/contact">
                <Contact></Contact>
              </Protect>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
          
        </AuthProvider>
    </>
  );
}

export default App;
