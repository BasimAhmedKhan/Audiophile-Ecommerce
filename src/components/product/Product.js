import Image from "next/image";
import Btn from "@/components/button/Btn";
import { useState } from "react";

export default function Product({ cart }) {
    const [counter, setVall] = useState(1);
    const increment = () => {
        setVall(e => e + 1);
    };
    const decrement = () => {
        setVall(e => e - 1);
    };
    return (
        <>
            <div className="marginTB flex" style={{ justifyContent: 'space-between' }}>
                <div className="productCard">
                    <Image className="b-radius" src="/images/category-headphones/desktop/image-xx99-mark-one.jpg" width={550} height={550} alt="image of speaker" />
                </div>
                <div className="productDetail childsMargin flex" style={{ flexDirection: 'column', justifyContent: 'center', width: '40%' }}>
                    <div style={{ color: 'var(--orange)' }} className="newProduct">NEW PRODUCT</div>
                    <div style={{ fontSize: '1.5rem' }}>
                        <h2>XX99 MARK II</h2>
                        <h2>HEADPHONES</h2>
                    </div>
                    <p style={{ color: 'rgba(0,0,0,0.5)' }}>The new XX99 Mark II headphones is the pinnacle of pristine audio.
                        It redefines your premium headphone experience by reproducing the
                        balanced depth and precision of studio-quality sound.
                    </p>
                    <h3 style={{ display: `${cart ? "" : "none"}` }}><span>$ </span>2,999</h3>
                    <div className="flex">
                        <div className="flex" style={{ marginRight: '1rem', display: `${cart ? "" : "none"}` }}>
                            <div onClick={decrement} className="counter center">-</div>
                            <span className="counter center">{counter}</span>
                            <div onClick={increment} className="counter center">+</div>
                        </div>
                        <Btn bg={"orange"} size={'large'} text={cart ? "ADD PRODUCT" : "SEE PRODUCT"} />
                    </div>
                </div>
            </div>
        </>
    );
}