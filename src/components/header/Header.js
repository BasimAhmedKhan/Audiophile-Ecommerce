import Image from 'next/image'
import styles from './Header.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Header() {
    return (
        <header className='margin'>
            <nav className={styles.nav}>
                <ul>
                    <li><Image className={styles.title} src={'./images/shared/desktop/logo.svg'} width={100} height={100} /></li>
                </ul>
                <ul className='center'>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
                <ul>
                    <li><AiOutlineShoppingCart className={styles.cart} size={28} /></li>
                </ul>
            </nav>
        </header>
    );
}