import Image from "next/image";
import styles from './ProductCard.module.css';
import { MdArrowForwardIos } from 'react-icons/md'
import Link from "next/link";

export default function ProductCard({name}) {
    return (
        <Link href={`/${name}`} className={`${styles.productCard} center`}>
            <Image className={styles.productImg} src={`/images/shared/desktop/image-${name}.png`} width={500} height={500} alt={name}/>
            <h3 className={styles.title}>{name}</h3>
            <div className='center' style={{marginBottom: '1.5rem'}}>
                <p className={styles.show}>SHOW</p>
                <MdArrowForwardIos style={{ color: 'var(--orange)' }} />
            </div>
        </Link>
    );
}