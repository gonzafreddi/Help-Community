import React from 'react'
import style from './About.module.css'

export const About = () => {
    return (
        <div className={style.container}>
            <h2 className={style.heading}>Acerca de Nosotros</h2>
            <p>
                Bienvenido a nuestra comunidad comprometida con el cambio y la
                solidaridad. En HelpCommunity, creemos en el poder de la
                generosidad para transformar vidas y comunidades enteras. Desde septiembre de 2023, hemos estado trabajando incansablemente 
                para abordar los problemas de la sociedad moderna.
            </p>

            <h3 className={style.heading}>Nuestra Misión</h3>
            <p className={style.text}>
                En HelpCommunity, creemos en el poder de la comunidad para impulsar el
                cambio y la solidaridad. Nuestra misión es proporcionar una plataforma
                inclusiva y accesible donde individuos con pasiones y causas diversas
                puedan unirse para marcar la diferencia.
            </p>

            <h3 className={style.heading}>¿Cómo Funcionamos?</h3>
            <p className={style.text}>
                Cualquier persona puede iniciar una campaña y cualquier persona puede
                contribuir. Nuestro proceso es simple y transparente, permitiendo a los
                organizadores y donantes interactuar de manera directa y efectiva. Creemos
                en la importancia de la confianza y la responsabilidad en todas nuestras
                operaciones.
            </p>

            <h3 className={style.heading}>Únete a Nosotros</h3>
            <p className={style.text}>
                Tú también puedes ser parte del cambio. Ya sea a través de una donación
                única, creando una campaña para ayudar a quien lo necesite o ayudando a financiar este proyecto,
                cada contribución es un paso hacia un mundo mejor.
                Estamos comprometidos a construir un mundo más solidario, y te invitamos a
                ser parte de esta misión. Únete como organizador, donante o adquiriendo
                nuestros productos con propósito. Juntos, podemos lograr un impacto real y
                duradero en las vidas de aquellos que más lo necesitan.
            </p>

            <p className={style.text}>
                Gracias por ser parte de nuestra misión de hacer un impacto positivo en
                el mundo. Juntos, podemos lograr un cambio duradero y
                significativo.
            </p>
        </div>
    );
}