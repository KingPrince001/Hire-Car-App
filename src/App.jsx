import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import ActiveReservations from './pages/ActiveReservations';
import Account from './pages/Account';
import Privacy from './pages/Privacy';
import Notifications from './pages/Notifications';
import Register from './pages/Register';
import Login from './pages/Login';
import FAQ from './pages/FAQ';
import './App.css';




function App() {

  const {collapseSidebar} =  useProSidebar();
    return (
   <div style={{display:'flex'}}>
<Sidebar className='app' >
<Menu>
  <MenuItem className='menu1' icon={<MenuRoundedIcon 
   
  onClick={() => {
    collapseSidebar();
  }}
  />}>
    <h2 >HireWheels</h2>
  </MenuItem>
  <MenuItem component={<Link to='/'  />} icon={<AccountBalanceRoundedIcon />}>Home</MenuItem>
  <SubMenu label="Reservations" icon={<GridViewRoundedIcon />}>
  <MenuItem component={<Link to='reserve'  />} icon={<ReceiptRoundedIcon />}>Reserve</MenuItem>
  <MenuItem component={<Link to='activeReservations'  />} icon={<BarChartRoundedIcon />}>Active Reservations</MenuItem>
  </SubMenu>
  <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
  <MenuItem component={<Link to='account'  />} icon={<AccountCircleRoundedIcon />}>Account</MenuItem>
  <MenuItem component={<Link to='privacy'  />} icon={<ShieldRoundedIcon />}>Privacy</MenuItem>
  <MenuItem component={<Link to='notifications'  />} icon={<NotificationsRoundedIcon />}>Notifications</MenuItem>
  </SubMenu>
  <MenuItem component={<Link to='login'  />} icon={<LockOutlinedIcon />}>Login</MenuItem>
  <MenuItem component={<Link to='register'  />} icon={<PersonAddIcon />}>Register</MenuItem>
  <MenuItem component={<Link to='FAQ'  />} icon={<HelpOutlineIcon />}>FAQ</MenuItem>
  <MenuItem  icon={<LogoutRoundedIcon />} >Logout</MenuItem>
</Menu>

</Sidebar>

<section>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='reserve' element={<Reserve />} />
    <Route path='activeReservations' element={<ActiveReservations />} />
    <Route path='account' element={<Account />} />
    <Route path='privacy' element={<Privacy />} />
    <Route path='notifications' element={<Notifications />} />
    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
    <Route path='FAQ' element={<FAQ />} />
   
  </Routes>
</section>
   </div>
  )
}

export default App
