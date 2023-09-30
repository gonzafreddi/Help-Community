import styles from './Footer.module.css';
import logoGrande from '../../assets/logoGrandeBlanco.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoGrande} alt="Logo de HelpCommunity" />
        </div>
        <div className={styles.contact}>
          <h3>Contacto</h3>
          <p>Dirección: [Dirección]</p>
          <p>Email: info@helpcommunity.org</p>
          <p>Teléfono: +123456789</p>
        </div>
        <div className={styles.social}>
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear} HelpCommunity. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;