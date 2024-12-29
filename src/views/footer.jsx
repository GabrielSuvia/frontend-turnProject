import styles from './footer.module.css'

const Footer = ()=>{

    return (<footer className={styles.foot}>
      <div className={styles.container}>
    <p>&copy; 2024 Tu Sitio Web. Todos los derechos reservados.</p>
    <ul>
      <li><a href="#">Acerca de</a></li>
      <li><a href="#">Contacto</a></li>
      <li><a href="#">Política de privacidad</a></li>
    </ul>
  </div>

</footer>)

}


export default Footer;