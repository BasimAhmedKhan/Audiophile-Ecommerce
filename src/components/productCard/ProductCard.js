import Image from "next/image";
import styles from './ProductCard.module.css';
import { MdArrowForwardIos } from 'react-icons/md'
import Link from "next/link";

export default function ProductCard() {
    return (
        <Link href="#" className={`${styles.productCard} center`}>
            <Image className={styles.productImg} src={'/images/shared/desktop/image-earphones.png'} width={500} height={500} />
            <h3 className={styles.title}>HEADPHONES</h3>
            <div className='center' style={{marginBottom: '1.5rem'}}>
                <p className={styles.show}>SHOW</p>
                <MdArrowForwardIos style={{ color: 'var(--orange)' }} />
            </div>
        </Link>
    );
}