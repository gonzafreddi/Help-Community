import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './Login.module.css';
// import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { validateLogin, validateRegister } from './validateLogin';
import { postUser } from '../../redux/actions/action';

const Login = ({closeLogin}) => {
    
    const auth = useAuth();

    const dispatch = useDispatch();

    //Estados de errores
    const [errors, setErrors] = useState({
        email: '',
        password:'',
        emailRegister:'',
        passwordRegister:'',
        other: ''
    })

    //Estados locales de registro
    const [nameRegister, setNameRegister] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    
    //Estados locales de logueo
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //Manejo de registro
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await auth.register(emailRegister, passwordRegister);
            const userToPost = {
                name:"Fernando",
                email: emailRegister
            }
            dispatch(postUser(userToPost))
            closeLogin();
        } catch (error) {
            setErrors({...errors, other:error.message})
        }
    };

    //Manejo de logueo
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await auth.login(email, password);
        closeLogin();
      } catch (error) {
        console.log(error);
        if (error.code === 'auth/invalid-login-credentials') {
          // Manejar intento de inicio de sesión con contraseña incorrecta
          setErrors({...errors, password:'Contraseña incorrecta. Inténtalo de nuevo.'});
        } else {
          // Otro tipo de error, como cuenta inactiva, etc.
          console.error(error.message);
        }
      }
    };

    //Manejo de logueo/registro con google
    const handleGoogle = async (e) => {
      e.preventDefault();
      await auth.loginWithGoogle();
      closeLogin();
    };

    const disableRegister = () => {
        if (!errors.emailRegister && !errors.passwordRegister && emailRegister.trim() !== '' && passwordRegister.trim() !== '' && nameRegister.trim().length >= 2) {
            return false
        }
        return true;
    }
    
    const disableLogin = () => {
        if (!errors.email && !errors.password && email.trim() !== '' && password.trim() !== '') {
            return false
        }
        return true;
    }

    var isRegDisabled = disableRegister();
    var isLogDisabled = disableLogin();


    //Manejo del cambio de los inputs de la contraseña de registro
    const handleInputChange = (event) => {
        setPasswordRegister(event.target.value)
        setErrors(validateRegister({passwordRegister}))
        isRegDisabled = disableRegister();
    }


    


    return (
        <div className={style.modalOverlay}>
            <div className={style.modal}>
                <div className={style.closeContainer}>
                    <button className={style.closeBtn} onClick={closeLogin}>X</button>
                </div>
                <section className={style.formsSection}>
                    <div className={style.login}>
                        <div>
                            <h1 className={style.textoLI}>Inicie Sesión</h1>
                        </div>

                        <div className={style.formContainer}>
                            <form className={style.logInForm}>
                                <input
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setErrors(validateLogin({email}))
                                        isLogDisabled = disableLogin();
                                    }}
                                    onBlur={() => {
                                        if (email === '') {
                                            setErrors({
                                                ...errors,
                                                email: ''
                                            })
                                        }
                                    }}
                                    className={style.logInInput}
                                    type="email"
                                    placeholder='Correo electrónico'
                                />
                                <span className={style.errorMsgLI}>{errors.email}</span>

                                <input
                                    onChange={(e) => {
                                        const alreadyFocused = true;
                                        setPassword(e.target.value)
                                        setErrors(validateLogin({password, alreadyFocused}))
                                        isLogDisabled = disableLogin();
                                    }}
                                    className={style.logInInput}
                                    type="password"
                                    placeholder='Contraseña'
                                />
                                <span className={style.errorMsg}>{errors.password}</span>
                                <div className={style.forgotPassContainer}>
                                    <Link>
                                        <a className={style.forgotPass}>¿Has olvidado tu contraseña?</a>
                                    </Link>
                                </div>

                                <button onClick={(e) => handleLogin(e)} className={style.submitBtn} disabled={isLogDisabled}>
                                    Iniciar Sesión
                                </button>
                            </form>
                        </div>

                        <div>
                            <button className={style.google} onClick={(e) => handleGoogle(e)}>Inicia Sesión con Google</button>
                        </div>

                    </div>
                    <div className={style.register}>
                        <div>
                            <h1 className={style.textoREG}>Regístrese</h1>
                        </div>

                        <div className={style.formContainer}>
                            <form className={style.logInForm}>
                                <input
                                    onChange={(e) => {
                                        
                                        setNameRegister(e.target.value)

                                        isRegDisabled = disableRegister(errors)
                                    }}
                                    onBlur={() => {
                                        if (emailRegister === '') {
                                            setErrors({
                                                ...errors,
                                                emailRegister: ''
                                            })
                                        }
                                    }}
                                    className={style.logInInput}
                                    type="name"
                                    placeholder='Nombre'
                                />
                                <input
                                    onChange={(e) => {
                                        
                                        setEmailRegister(e.target.value)

                                        setErrors(validateRegister({emailRegister}))

                                        isRegDisabled = disableRegister(errors)
                                    }}
                                    onBlur={() => {
                                        if (emailRegister === '') {
                                            setErrors({
                                                ...errors,
                                                emailRegister: ''
                                            })
                                        }
                                    }}
                                    className={style.logInInput}
                                    type="email"
                                    placeholder='Correo electrónico'
                                />

                                <span className={style.errorMsgLI}>{errors.emailRegister}</span>

                                <input
                                    onChange={handleInputChange}
                                    onBlur={() => {
                                        if (passwordRegister === '') {
                                            setErrors({
                                                ...errors,
                                                passwordRegister: ''
                                            })
                                        }
                                    }}
                                    className={style.logInInput}
                                    type="password"
                                    placeholder='Contraseña'
                                />
                                <span className={style.errorMsgPassR}>{errors.passwordRegister}</span>
                                <span className={style.errorMsg}>{errors.other}</span>

                                <button onClick={(e) => handleRegister(e)} disabled={isRegDisabled} className={style.submitBtn}>
                                    Registrarse
                                </button>
                            </form>
                        </div>

                        <div>
                            <button className={style.google} onClick={(e) => handleGoogle(e)}>Registrarme con Google</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login