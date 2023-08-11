import Header from '@/components/header/Header';
import styles from './Footer.module.css';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={`${styles.footer} flex`}>
            <Header footer={true} />
            <div className={`${styles.footerDetailContainer} margin flex`}>
                <div className={`${styles.footerDetail} flex`}>
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <p>Copyright 2023. All Rights Reserved</p>
                </div>
                <div className={`${styles.social} center`}>
                    <Link href="#"><AiFillFacebook size={32} /></Link>
                    <Link href="#"><AiOutlineTwitter size={32} /></Link>
                    <Link href="#"><AiOutlineInstagram size={32} /></Link>
                </div>
            </div>
        </footer>
    );
}