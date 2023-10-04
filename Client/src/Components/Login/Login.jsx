import { Link } from 'react-router-dom';
import style from './Login.module.css';

const Login = () => {
  return (
    <div className={style.modalOverlay}>
        <div className={style.modal}>
            <div className={style.buttonCont}>
                <Link to={"/home"}>
                    <button className={style.closeBtn}>X</button>
                </Link>
            </div>
            <div>
                <h1>Inicia Sesion</h1>
            </div>

            <div>
                <button className={style.google}>Inicia Sesion con Google</button>
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