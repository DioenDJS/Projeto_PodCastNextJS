import styles from './styles.module.scss';

export default function Header(){
    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcast" />
            <p>O melhor para você ouvir, sempre</p>
            <span>Qui, 8 Abril</span>
        </header>
    )
}