import './App.css';
import Navbar from './Navbar';

function App() {
    
    //console.log('App.js está sendo renderizado.'); // Adicione isso para verificar se o App.js está sendo chamado
    const handleNavbarButtonClick = () => {
      //console.log('Botão do Navbar clicado no componente pai (App.js)');
    };
  
    return (
      <div className="App">
        <Navbar onClickButton={handleNavbarButtonClick} />
        <div className='wrapper'>
            <span className="icon-close"><ion-icon name="close"></ion-icon></span>
            <div className="form-box login">
                <h2>Login</h2>
                <form>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" id="email" required />
                        <label>E-mail</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" id="passwordlogin" />
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" id="Remember" /> Remember me</label>
                        <a href="#" id="forgotpsswd">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn" id="submitLogin">Login</button>

                    <div className="login-register">
                        <p>Don't have an account?<a href="#" className="register-link">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
  

export default App;
