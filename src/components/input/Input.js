import styles from '@/styles/checkout.module.css';

export default function Input({ text, placeholder, type, width }) {
    return (
        <div className="flex col childsMargin resWidth" style={{ width: `${width}%` }}>
            <b className={styles.bText}>{text}</b>
            <input className={`${styles.input} b-radius`} type={type} placeholder={placeholder} required />
        </div>
    );
}