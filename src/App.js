import './App.css';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/scss/bootstrap.scss";
import Login from './Pages/Login';
import  Profile from './Pages/Profile';
import  Home from './Pages/Home';
import  NotFound from './Pages/NotFound';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Layout from './Components/Layout';
// import NavBar from './Components/NavBar';
import IsAuth from './Components/Auth/IsAuth';
import IsUnAuth from './Components/Auth/IsUnAuth';
function App() {
  <Login/>
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<NotFound />}>
        <Route
          path="/"
          element={
            <IsAuth>
              <Home />
            </IsAuth>
          }
        />
        <Route
          path="/login"
          element={
            <IsUnAuth>
              <Login />
            </IsUnAuth>
          }
        />

        <Route
          path="/profile"
          element={
            <IsAuth>
              <Profile />
            </IsAuth>
          }
        />
      </Route>

    )

  );
  return <RouterProvider router={router} />;

}

export default App;
