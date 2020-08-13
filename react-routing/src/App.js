import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import HomeLayout from './container/Home';
// import AdminLayout from './container/Admin';
// import AboutPage from './container/Home/AboutPage';
// import ListMovie from './container/Home/ListMovie';
// import HomePage from './container/Home/HomePage';
// import DashboardPage from './container/Admin/DashboardPage';
// import AddUserPage from './container/Admin/AddUserPage';
import PageNotFound from './container/PageNotFound';
import { routesHome, routesAdmin } from './routes';
import HomeTemplate from './template/HomeTemplate';
import AdminTemplate from './template/AdminTemplate';
function App() {

  const showHomeLayout = (routes) => {
    if(routes && routes.length > 0){
      return routes.map((route, index)=>{
        return <HomeTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
      })
    }
  }
  const showAdminLayout = (routes) => {
    if(routes && routes.length > 0){
      return routes.map((route, index)=>{
        return <AdminTemplate key={index} exact={route.exact} path={route.path} Component={route.component} />
      })
    }
  }
  return (
    <BrowserRouter>
    <Switch>
      {/* trang home - localhost:3000*/}
      {/* <Route exact path="/" component={HomeLayout}  />
      <Route path="/home" component={HomePage}  />
      <Route path="/about" component={AboutPage}  />
      <Route path="/list-movie" component={ListMovie}  /> */}

      {showHomeLayout(routesHome)}
      {/* trang admin - localhost:3000/admin*/}
      {/* <Route path="/admin" component={AdminLayout}/>
      <Route path="/dashboard" component={DashboardPage}/>
      <Route path="/add-user" component={AddUserPage}/> */}

      
      {showAdminLayout(routesAdmin)}
      {/* page not found */}
      <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
