import Image from 'next/image'
import styles from './Header.module.css';
import { Popover } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Header({ footer }) {
    const text = <span>Items</span>;
    const content = (
        <div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
        </div>
    );
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} margin`} style={{ borderBottom: footer ? 'none' : '1px solid rgb(61, 61, 61)' }}>
                <ul>
                    <li><Image className={styles.title} src={'./images/shared/desktop/logo.svg'} width={100} height={100} /></li>
                </ul>
                <ul className='center'>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
                <ul style={{ display: footer ? 'none' : 'block' }}>
                    <li>
                        <Popover placement="bottomRight" title={text} content={content} trigger="click">
                            <AiOutlineShoppingCart className={styles.cart} size={28} />
                        </Popover>
                    </li>
                </ul>
            </nav>
        </header>
    );
}