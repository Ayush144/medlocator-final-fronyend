import React from 'react'
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Featured from './components/featured/Featured';
import Home from './components/hero/Home';
import Best from './components/best/Best';
import Footer from './components/footer/Footer';
import Login from './pages/Login';
// import Register from './pages/Register';
import Products from './components/featured/Products';
//import MainLogin from './pages/SignUp';
// import Result from './pages/Result';
import SignUp from './pages/SignUp';
import Result from './pages/Result';
import ShopApp from './ShopApp';
import Storeowner from './pages/Storeowner';
// import Cart from './components/Cart'
// import RegisterForm from './pages/RegisterForm';
function App() {
  return (
    // <div>
    //   {/* <Navbar/> */}
    //   <Home/>
    //   {/* <Login/> */}
    //   {/* <Register/> */}
    //   <Best/>
    //   <Featured/>
    //   <Footer/>
    // </div>
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/produ" component={ShopApp} />
          <Route exact path="/storeregister" component={Storeowner} />
        </Switch>
        {/* <Cart/> 
        <Products />
        <Featured />
        <Best />*/}
        <Footer />
      </Router>
    </>
  );
}

export default App;
