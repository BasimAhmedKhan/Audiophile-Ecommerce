import Image from 'next/image'
import styles from './Header.module.css';
import { Divider } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Header() {
    return (
        <>
        <header className='margin'>
            <nav className={styles.nav}>
                <Image className={styles.title} src={'./images/shared/desktop/logo.svg'} width={100} height={100} />
                <ul className='center'>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
                <AiOutlineShoppingCart className={styles.cart} size={28} />
            </nav>
        </header>
        <Divider />
        </>
    );
}