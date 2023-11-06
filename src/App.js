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
import CostChange from './Components/CostChange/CostChange';
import Dashboard from './Components/Dashboard/Dashboard';
import UserMgmtMain from './Components/UserManagement/UserMgmtMain';
import UMViewSites from './Components/UserManagement/UMViewSites';
import UMViewUser from './Components/UserManagement/UMViewUser';
import UMRemoveUser from './Components/UserManagement/UMRemoveUser'
import UMCreateUser from './Components/UserManagement/UMCreateUser';
import PurchaseOrderMain from './Components/PurchaseOrder/PurchaseOrderMain';

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
        <Route path='/CostChange' element={<CostChange/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/PurchaseOrderMain' element={<PurchaseOrderMain/>}></Route>
        <Route path='/UserMgmtMain' element={<UserMgmtMain/>}></Route>
        <Route path='/UMViewSites' element={<UMViewSites/>}></Route>
        <Route path='/UMViewUser' element={<UMViewUser/>}></Route>
        <Route path='/UMRemoveUser' element={<UMRemoveUser/>}></Route>
        <Route path='/UMCreateUser' element={<UMCreateUser/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;