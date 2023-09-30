import Header from '@/components/header/Header';
import styles from './Footer.module.css';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={`${styles.footer} flex flex-column`}>
            <Header footer={true} />
            <div className={`${styles.footerDetailContainer} margin margin0 flex flex-column childsMargin resCenter resWidth`}>
                <div className={`${styles.footerDetail} flex childsMargin resCenter`}>
                    <p style={{marginBottom: '3rem'}}>Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
                    <p>Copyright 2023. All Rights Reserved</p>
                </div>
                <div className={`${styles.social} center resCenter`}>
                    <Link href="https://www.facebook.com/profile.php?id=100009322472394"><AiFillFacebook size={32} target="_blank"/></Link>
                    <Link href="#"><AiOutlineTwitter size={32} /></Link>
                    <Link href="https://www.instagram.com/basim_khann/"><AiOutlineInstagram size={32} /></Link>
                </div>
            </div>
        </footer>
    );
}