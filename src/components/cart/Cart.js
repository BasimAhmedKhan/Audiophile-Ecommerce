import styles from '../header/Header.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Btn from '../button/Btn';

export default function Cart() {

    const { increaseQuantity, decreaseQuantity, removeItems, getTotal, cart } = useCart();
    if (cart.length > 0) {
        const items = cart.map((e) => {
            return (
                <>
                    <div key={e.price} className="center width100" style={{ height: '3rem' }}>
                        <div className="center">
                            <Image className='b-radius' src={`/assets/cart/${e.image}.jpg`} width={'50'} height={'50'} alt={`${e.name}`} />
                            <div style={{ marginLeft: '1rem' }}>
                                <h3>{(e.name).substring(0, 3)}</h3>
                                <strong style={{ color: 'var(--greyOnWhite)' }}>{"$ " + e.price}</strong>
                            </div>
                        </div>
                        <div className="flex" style={{ marginRight: '1rem' }}>
                            <div onClick={() => decreaseQuantity(e.id)} className="counter center">-</div>
                            <span className="counter center">{e.counter}</span>
                            <div onClick={() => increaseQuantity(e.id)} className="counter center">+</div>
                        </div>
                    </div>
                </>
            );
        });
        return (
            <>
                <div className={`${styles.cart} center`} style={{ height: "auto", width: "20rem", flexDirection: 'column' }}>
                    <div className="flex center width100">
                        <h3>CART</h3>
                        <h3 style={{ color: 'var(--greyOnWhite)', cursor: 'pointer' }} onClick={removeItems}>Remove All</h3>
                    </div>
                    {items}
                    <div className="flex center width100">
                        <h3 style={{ color: 'var(--greyOnWhite)' }}>TOTAL</h3>
                        <h3>{"$ " + (cart.reduce((p, e) => { return p + (e.price * e.counter) }, 0))}</h3>
                    </div>
                    <Btn link={"/checkout"} bg={"orange"} size={'large'} text={'CHECK OUT'}  />
                </div>
            </>
        );
    }
    return (
        <>
            <div className='center childsMargin' style={{ height: "auto", width: "20rem", flexDirection: 'column' }}>
                <strong style={{ color: 'var(--greyOnWhite)' }}>YOUR CART IS EMPTY</strong>
                <AiOutlineShoppingCart className={styles.cart} size={100} />
            </div>
        </>
    );
}