import LoginForm from "../components/login/LoginForm";
import './login.css'
import RegisterLink from "../components/login/RegisterLink";
import LoginPageTitle from "../components/login/LoginPageTitle";
const login =() => {
  return (
    <div className="login-page">
      <LoginPageTitle />
      <LoginForm />
      <div className="register-link">
      <RegisterLink />
      </div>
     
    </div>
  )
}

export default login
