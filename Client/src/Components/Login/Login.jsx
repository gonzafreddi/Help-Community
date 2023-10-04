import { Link } from 'react-router-dom';
import style from './Login.module.css';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

const Login = ({closeLogin}) => {
    const auth = useAuth();
  /* A hook that allows you to use state in (formsRegister). */
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
  /* A hook that allows you to use state in t(formsLogin). */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = (e) => {
      e.preventDefault();
      auth.register(emailRegister, passwordRegister);
    };
    const handleLogin = async (e) => {
      e.preventDefault();
      await auth.login(email, password);
      closeLogin();
    };
    const handleGoogle = async (e) => {
      e.preventDefault();
      await auth.loginWithGoogle();
      closeLogin();
    };
    return (
        <div className={style.modalOverlay}>
            <div className={style.modal}>
                <div className={style.buttonCont}>
                    <button className={style.closeBtn} onClick={closeLogin}>X</button>
                </div>
                <div>
                    <h1 className={style.textoLI}>Inicia Sesión</h1>
                </div>

                <div className={style.formContainer}>
                    <form className={style.logInForm}>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className={style.logInInput}
                            type="email"
                            placeholder='Correo electrónico'
                        />

                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className={style.logInInput}
                            type="password"
                            placeholder='Contraseña'
                        />

                        <button onClick={(e) => handleLogin(e)} className={style.submitBtn}>
                            Iniciar Sesión
                        </button>
                    </form>
                </div>

                <div>
                    <button className={style.google} onClick={(e) => handleGoogle(e)}>Inicia Sesión con Google</button>
                </div>

                <div>
                    <Link>
                        <a className={style.forgotPass}>¿Has olvidado tu contraseña?</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login