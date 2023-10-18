import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import styles from './Login.module.css';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { validateLogin, validateRegister } from './validateLogin';
import { postUser, getUserByEmail } from '../../redux/actions/action';

const Login = ({closeLogin}) => {
    
    const auth = useAuth();

    const dispatch = useDispatch();

    const notify = (type) => {
        if (type === 'logError') {
            toast.error('Ocurrio un error al iniciar sesión', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type === 'regSuccess') {
            toast.success('Registro completado', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type === 'logSuccess') {
            toast.success('Sesión iniciada correctamente', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type === 'regError') {
            toast.error('Ocurrio un error en el registro, intentelo nuevamente', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type === 'googleSuccess') {
            toast.success('Ingreso con Google realizado correctamente', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

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
                name: nameRegister,
                email: emailRegister,
                image: "https://res.cloudinary.com/dauipbxlu/image/upload/v1697131213/uprwps0euakltzyee3zj.jpg"
            }
            await dispatch(postUser(userToPost))
            await dispatch(getUserByEmail(userToPost.email))
            notify('regSuccess');
            closeLogin();
        } catch (error) {
            notify('regError');
            console.log(error);
            setErrors({...errors, other:error.message})
        }
    };

    //Manejo de logueo
    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            await auth.login(email, password);
            notify('logSuccess');
            await dispatch(getUserByEmail(email))
            closeLogin();

        } catch (error) {

            if (error.code === 'auth/invalid-login-credentials') {

            // Manejar intento de inicio de sesión con contraseña incorrecta
            setErrors({...errors, password:'Contraseña incorrecta. Inténtalo de nuevo.'});

        } else {

            // Otro tipo de error, como cuenta inactiva, etc.
            notify('logError');
            console.error(error.message);

        }
        }
    };

    //Manejo de logueo/registro con google
    const handleGoogle = async (e) => {
        e.preventDefault();
        const result = await auth.loginWithGoogle();

        try {
            
            const { displayName } = result.user;
            const { email } = result.user;
            const { photoURL } = result.user;
            const userToPost = {
                name: displayName,
                email: email,
                image: photoURL ? photoURL : "https://res.cloudinary.com/dauipbxlu/image/upload/v1697131213/uprwps0euakltzyee3zj.jpg"
            }
            console.log(userToPost);

            //TODO          Descomentar el dispatch cuando la funcion post este lista para recibir usuarios iguales
            await dispatch(postUser(userToPost))

            await dispatch(getUserByEmail(userToPost.email))

            notify('googleSuccess');

        } catch (error) {
            setErrors({...errors, other:error.message})
        }


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
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.closeContainer}>
                    <button className={styles.closeBtn} onClick={closeLogin}>X</button>
                </div>
                <section className={styles.formsSection}>
                    <div className={styles.login}>
                        <div>
                            <h1 className={styles.textoLI}>Inicie Sesión</h1>
                            <h1 className={styles.textoLI}>{auth.user.email}</h1>
                        </div>

                        <div className={styles.formContainer}>
                            <form className={styles.logInForm}>
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
                                    className={styles.logInInput}
                                    type="email"
                                    placeholder='Correo electrónico'
                                />
                                <span className={styles.errorMsgLI}>{errors.email}</span>

                                <input
                                    onChange={(e) => {
                                        const alreadyFocused = true;
                                        setPassword(e.target.value)
                                        setErrors(validateLogin({password, alreadyFocused}))
                                        isLogDisabled = disableLogin();
                                    }}
                                    className={styles.logInInput}
                                    type="password"
                                    placeholder='Contraseña'
                                />
                                <span className={styles.wrongPass}>{errors.password}</span>
                                <div className={styles.forgotPassContainer}>
                                    <Link>
                                        <a className={styles.forgotPass}>¿Has olvidado tu contraseña?</a>
                                    </Link>
                                </div>

                                <button onClick={(e) => handleLogin(e)} className={styles.submitBtn} disabled={isLogDisabled}>
                                    Iniciar Sesión
                                </button>

                            </form>
                        </div>

                        <div>
                            <button className={styles.google} onClick={(e) => handleGoogle(e)}>Inicia Sesión con Google</button>
                        </div>

                    </div>
                    <div className={styles.register}>
                        <div>
                            <h1 className={styles.textoREG}>Regístrese</h1>
                        </div>

                        <div className={styles.formContainer}>
                            <form className={styles.logInForm}>
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
                                    className={styles.logInInput}
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
                                    className={styles.logInInput}
                                    type="email"
                                    placeholder='Correo electrónico'
                                />

                                <span className={styles.errorMsgLI}>{errors.emailRegister}</span>

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
                                    className={styles.logInInput}
                                    type="password"
                                    placeholder='Contraseña'
                                />
                                <span className={styles.errorMsgPassR}>{errors.passwordRegister}</span>
                                <span className={styles.errorMsg}>{errors.other}</span>

                                <button onClick={(e) => handleRegister(e)} disabled={isRegDisabled} className={styles.submitBtn}>
                                    Registrarse
                                </button>
                            </form>
                        </div>

                        <div>
                            <button className={styles.google} onClick={(e) => handleGoogle(e)}>Registrarme con Google</button>
                        </div>
                    </div>
                </section>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login