import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom'
/* import Post from './components/Post'; */
import Login from './components/Login';
import Employer from './components/Employer';
/* import Employee from './components/Employee'; */
import Register from './components/Register';
import EmployerForm from './components/EmployerForm';
import EmployeeForm from './components/EmployeeForm';
import Subscription from './components/Subscription';
import TestEmployer from './components/TestEmployer';
import Dashboard from './components/Dashboard';
import Postjob from './components/Postjob';
/* import Description from './components/Description'; */
import Home from './components/Home';
import HorizontalLinearStepper from './components/HorizontalLinearStepper';
import Footer from './components/Footer';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
/* import Box from '@mui/material/Box';
import Container from '@mui/material/Container'; */
function App() {

  return (
    <Provider store={Store}>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/employer/:id' element={<Employer />} />
          <Route path='/postemployer' element={<HorizontalLinearStepper />} />

          <Route path='/testemployer' element={<TestEmployer />} />
          <Route path='/register' element={<Register />} />
          <Route path='/employerform' element={<EmployerForm />} />
          <Route path='/employeeform' element={<EmployeeForm />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/postjob' element={<Postjob />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <ToastContainer ></ToastContainer>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
