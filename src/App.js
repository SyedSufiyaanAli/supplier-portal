import './style/App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import RegistrationID from './Components/Registration/RegistrationID';
import ForgetPassword from './Components/ForgotPassword/ForgotPassword';
import ChangePassword from './Components/ForgotPassword/ChangePassword';
import ChangePasswordConf from './Components/ForgotPassword/ChangePasswordConf';
import HomeNav from './Components/Navbar/HomeNav';
import OnboardingNav from './Components/Navbar/OnboardingNav';


function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/Registration' element={<Registration />}></Route>
        <Route path='/RegistrationID' element={<RegistrationID />}></Route>
        <Route path='/ForgotPassword' element={<ForgetPassword />}></Route>
        <Route path='/ChangePassword' element={<ChangePassword />}></Route>
        <Route path='/ChangePasswordConf' element={<ChangePasswordConf />}></Route>
        <Route path='/HomeNav' element={<HomeNav/>}></Route>
        <Route path='/OnboardingNav' element={<OnboardingNav/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

