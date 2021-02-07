import './App.css';
import Login from './Login';
import react from 'react';

function App() {
  return (
    <div className="login-register">
      <div className="google-signin">
      Create an account to collaborate on "Movies v2"
      <br/><br/><Login /><br/>
      </div>

      <div className="login">
      <br/>or<br/><br/>
        <form action='' id='loginform'><Loginform/></form>
      </div>

      <div className="forgot-panel">
        <a href="https://www.figma.com/proto/eaaix01FR8osKzuYfMu4Ua/Movies-v2?scaling=min-zoom&node-id=1%3A3">Sign up with SAML SSO</a>
        <br/><br/>Already have an account? Log in
        <br/><br/>This site is protected by reCAPTCHA and the<a href="https://policies.google.com/privacy"> Google Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>

    </div>
  );
}
function Loginform(){
  return(
    <form>
      <label for='email'></label>
      <input type='text' placeholder='Email' id='useremail'/><br/>
      <label for='password'></label><br/>
      <input type='password' placeholder='Password' id='password'/><br/>
      <input type='submit' value='Create account' className='submit'/>
    </form>
  )
}
export default App;
