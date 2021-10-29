import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Error from './Pages/Error/Error';
import JoinTour from './Pages/JoinTour/JoinTour';
import Login from './Pages/Login/Login';
import AuthProvidor from './ContextApi/AuthProvidor';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyTours from './Pages/MyTours/MyTours';
import ManageTours from './Pages/MangeTours/ManageTours';
import AddNewTour from './Pages/AddNewTour/AddNewTour';

function App() {
  return (
    <AuthProvidor>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/jointour/:id'>
            <JoinTour></JoinTour>
          </PrivateRoute>
          <PrivateRoute exact path='/mytours'>
            <MyTours></MyTours>
          </PrivateRoute>
          <PrivateRoute path='/managetours'>
            <ManageTours></ManageTours>
          </PrivateRoute>
          <PrivateRoute path='/managetour'>
            <AddNewTour></AddNewTour>
          </PrivateRoute>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvidor>
  );
}

export default App;
