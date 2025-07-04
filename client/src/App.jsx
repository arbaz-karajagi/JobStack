 
import './App.css'
import LoginPage from './pages/LoginPage'
import  RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import AddJobPage from './pages/AddJobPage'
import JobDetailsPage from './pages/JobDetailsPage'
import PageNotFound from './pages/PageNotFound'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Navbar from './components/Navbar'
function App() {
   
const router = createBrowserRouter([
{path : '/login',element : <> <Navbar/> <LoginPage/></>},
{path : '/register',element : <><Navbar/><RegisterPage /></>},
{path : '/dashboard',element :<><Navbar/> <DashboardPage/></>},
{path : '/addjob',element :<><Navbar/> <AddJobPage /></>},
{path : '/jobdetails/:id',element :<><Navbar/>  <JobDetailsPage /></>},
{path : '/*',element : <><Navbar/> <PageNotFound/></>},

])
  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
}

export default App
