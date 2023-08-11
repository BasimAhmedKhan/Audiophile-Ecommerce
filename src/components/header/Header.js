import Image from 'next/image'
import styles from './Header.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Header({footer}) {
    return (
        <header className={`${styles.header} margin`}>
            <nav className={styles.nav} style={{borderBottom: footer ? 'none':'1px solid rgb(61, 61, 61)'}}>
                <ul>
                    <li><Image className={styles.title} src={'./images/shared/desktop/logo.svg'} width={100} height={100} /></li>
                </ul>
                <ul className='center'>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
                <ul style={{display: footer ? 'none':'block'}}>
                    <li><AiOutlineShoppingCart className={styles.cart} size={28} /></li>
                </ul>
            </nav>
        </header>
    );
}