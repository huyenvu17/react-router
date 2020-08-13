import HomeLayout from "../container/Home";
import HomePage from "../container/Home/HomePage";
import AboutPage from "../container/Home/AboutPage";
import ListMovie from "../container/Home/ListMovie";
import AdminLayout from "../container/Admin";
import DashboardPage from "../container/Admin/DashboardPage";
import AddUserPage from "../container/Admin/AddUserPage";
import MovieDetail from "../container/Home/DetailPage";

const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomeLayout
  },
  {
    exact: false,
    path: '/home',
    component: HomePage
  },
  {
    exact: false,
    path: '/about',
    component: AboutPage
  },
  {
    exact: false,
    path: '/list-movie',
    component: ListMovie
  },
  {
    exact: false,
    path: '/detail/:id',
    component: MovieDetail
  }
]

const routesAdmin = [
  {
    exact: false,
    path: '/admin',
    component: AdminLayout
  },
  {
    exact: false,
    path: '/dashboard',
    component: DashboardPage
  },
  {
    exact: false,
    path: '/add-user',
    component: AddUserPage
  }
]
export {routesHome, routesAdmin};
