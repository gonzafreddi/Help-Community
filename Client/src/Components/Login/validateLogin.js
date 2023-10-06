// con esta funcio valido el formulario de login y registro
export function validateRegister({emailRegister, passwordRegister}) {
    let error = {};
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[0-9])[a-zA-Z0-9]{6,}$/;

    if ( emailRegister && !regexMail.test(emailRegister)) {
      error.emailRegister = "El email ingresado no es válido";
    }
    if (passwordRegister && !regexPassword.test(passwordRegister)) {
      error.passwordRegister = "La contraseña debe tener al menos 6 caracteres, incluyendo al menos un número";
    }
    return error;
}

export function validateLogin({email, password, alreadyFocused}) {
    let error = {};
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email && !regexMail.test(email)) {
      error.email = "El email ingresado no es válido";
    }
    // if (alreadyFocused && !password) {
    //   error.password = "Debe ingresar una contraseña";
    // }
    return error;
}