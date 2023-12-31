import Input from '@/components/input/Input';
import styles from '@/styles/checkout.module.css';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Image from 'next/image';
import dynamic from "next/dynamic";
import Btn from '@/components/button/Btn';
import { Modal } from 'antd'

export function Checkout() {

    const [paymentDetail, setPaymentDetail] = useState(true);
    const { grandTotal, getTotal, cart, removeItems } = useCart();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <section className='container height100 width100'>
            <Modal open={isModalOpen} footer={null} closable={false}>
                <div className="center col height100 width100 childsMargin" style={{ height: '25rem', width: '35rem' }}>
                    <Image
                        src="/assets/shared/desktop/icon-check-mark.svg"
                        width={80}
                        height={80}
                        alt="success image" />
                    <h2 style={{ fontSize: '2rem' }}>Thank You for Ordering</h2>
                    <p style={{ color: 'var(--greyOnWhite)' }}>You&apos;ll receive an email shortly!</p>
                    <div className="" onClick={removeItems}>
                        <Btn text={"BACK TO HOME"} bg={'orange'} link={'/'} />
                    </div>
                </div>

            </Modal>
            <div className="marginTB">
                <div className={`${styles.checkoutContainer} flex width100 flex-column`}>
                    <form className={`${styles.checkout} flex b-radius paddingChildren childsMargin resWidth marginTop`}>
                        <h2 style={{ fontSize: '2rem', letterSpacing: '0.1rem', fontWeight: 600, marginTop: '1rem' }}>CHECKOUT</h2>
                        <b style={{ color: 'var(--orange)' }} className={styles.bText}>BILLING ADDRESS</b>
                        <div className="flex flex-column" style={{ justifyContent: 'space-between' }}>
                            <Input text="Name" placeholder="John Doe" type="text" width="49" />
                            <Input text="Email Address" placeholder="johndoe@email.com" type="email" width="49" />
                        </div>
                        <Input text="Phone Number" placeholder="923000000000" type="number" width="51" />
                        <b style={{ color: 'var(--orange)' }} className={styles.bText}>SHIPPING INFO</b>
                        <Input text="Your Address" placeholder="1137 Williams Roads" type="text" width="100" />
                        <div className="flex flex-column" style={{ justifyContent: 'space-between' }}>
                            <Input text="Zip Code" placeholder="1001" type="number" width="49" />
                            <Input text="City" placeholder="Karchi" type="text" width="49" />
                        </div>
                        <Input text="Country" placeholder="Pakistan" type="text" width="51" />
                        <b style={{ color: 'var(--orange)' }} className={styles.bText}>PAYMENT DETAILS</b>
                        <div style={{
                            width: '47%',
                            marginLeft: '1rem',
                            backgroundColor: 'white',
                            justifyContent: 'flex-start'
                        }} className={`${styles.input} b-radius paddingChildren center`}
                        >
                            <input style={{ color: 'var(--orange)', width: '1.2rem', height: '1.2rem', accentColor: 'var(--orange)' }} type="radio" name="paymentDetail" id="paymetnDetail" defaultChecked onClick={() => setPaymentDetail(true)} />
                            <h4 style={{ color: 'var(--black)' }}>e-money</h4>
                        </div>
                        <div style={{
                            width: '47%',
                            marginLeft: '1rem',
                            backgroundColor: 'white',
                            justifyContent: 'flex-start'
                        }} className={`${styles.input} b-radius paddingChildren center`}
                        >
                            <input style={{ color: 'var(--orange)', width: '1.2rem', height: '1.2rem', accentColor: 'var(--orange)' }} type="radio" name="paymentDetail" id="paymetnDetail" onClick={() => setPaymentDetail(false)} />
                            <h4 style={{ color: 'var(--black)' }}>Cash on Delivery</h4>
                        </div>
                        {paymentDetail ? (
                            <div className="flex flex-column" style={{ justifyContent: 'space-between' }}>
                                <Input text="e-Money Number" placeholder="123456789" type="number" width="49" />
                                <Input text="e-Money Number" placeholder="6891" type="text" width="49" />
                            </div>
                        ) : (
                            <div className="flex" style={{ justifyContent: 'space-between', height: '5rem' }}>
                                <svg width="20%" height="50" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z" fill="#D87D4A" />
                                </svg>
                                <p style={{ color: 'var(--greyOnWhite)', width: '78%' }}>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div>
                        )}
                    </form>
                    <div className={`${styles.summary} flex b-radius paddingChildren childsMargin resWidth marginTop`}>
                        <h2 style={{ letterSpacing: '0.1rem', marginTop: '1rem' }}>SUMMARY</h2>
                        <div className="width100 childsMargin">
                            {cart.length > 0 ?
                                cart.map((e) => {
                                    return (
                                        <>
                                            <div key={e.price} className="center width100" style={{ height: '3rem', justifyContent: 'space-between' }}>

                                                <Image className='b-radius' src={`/assets/cart/${e.image}.jpg`} width={'60'} height={'60'} alt={`${e.name}`} />
                                                <div style={{ marginLeft: '1rem' }}>
                                                    <h3>{(e.name).substring(0, 12)}</h3>
                                                    <strong style={{ color: 'var(--greyOnWhite)' }}>{"$ " + e.price}</strong>
                                                </div>
                                                <h3 className="flex">
                                                    <div className="" style={{ color: 'var(--greyOnWhite)', }}>{e.counter}x</div>
                                                </h3>
                                            </div>
                                        </>
                                    );
                                }) : null}
                        </div>
                        <div className="flex" style={{ justifyContent: 'space-between' }}>
                            <h4 style={{ color: 'var(--greyOnWhite)', letterSpacing: '0.1rem' }}>TOTAL</h4>
                            <h3>$ {getTotal()}</h3>
                        </div>
                        <div className="flex" style={{ justifyContent: 'space-between' }}>
                            <h4 style={{ color: 'var(--greyOnWhite)', letterSpacing: '0.1rem' }}>SHIPPING</h4>
                            <h3>$ 50</h3>
                        </div>
                        <div className="flex" style={{ justifyContent: 'space-between' }}>
                            <h4 style={{ color: 'var(--greyOnWhite)', letterSpacing: '0.1rem' }}>VAT(INCLUDED)</h4>
                            <h3>$ {grandTotal()}</h3>
                        </div>
                        <div className="flex" style={{ justifyContent: 'space-between' }}>
                            <h4 style={{ color: 'var(--greyOnWhite)', letterSpacing: '0.1rem' }}>GRAND TOTAL</h4>
                            <h3 style={{ color: 'var(--orange)' }}>$ {getTotal() + grandTotal()}</h3>
                        </div>
                        <div className="width100 center" onClick={showModal}>
                            <Btn bg={"orange"} size={'large'} text={'CONTINUE & PAY'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default dynamic(() => Promise.resolve(Checkout), {
    ssr: false,
});