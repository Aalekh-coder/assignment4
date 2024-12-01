import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js"
import Login from "../src/pages/Login.jsx"
import SignUp from "../src/pages/SignUp.jsx"
import Home from './pages/Home.jsx';
import LoggedInUser from './pages/LoggedInUser.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' index="true" element={<Home />} />
      <Route path='/loggedin'  element={<LoggedInUser />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
