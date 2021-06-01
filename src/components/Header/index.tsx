import styles from './styles.module.scss';

export default function Header(){

    /*
    Obtendo as infromaçoes da Data
    */
   const currentDate = new Date().toLocaleDateString()
    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcast" />
            <p>O melhor para você ouvir, sempre</p>
            <span>Qui, 8 Abril</span>
        </header>
    )
}