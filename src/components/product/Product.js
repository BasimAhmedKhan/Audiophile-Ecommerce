import Image from "next/image";
import Btn from "@/components/button/Btn";
import { useState } from "react";

export default function Product({ name, price, desc, cart, reverse, src, link }) {
    const [counter, setVall] = useState(1);
    const increment = () => {
        setVall(e => e + 1);
    };
    const decrement = () => {
        setVall(e => e - 1);
    };
    return (
        <>
            <div className="marginTB flex flex-column childsMargin" style={{ justifyContent: "space-between", flexDirection: `${reverse ? "row-reverse" : ''}` }}>
                <div className="productCard">
                    <picture>
                        <source media="(min-width: 992px)" srcSet={src.desktop} />
                        <source media="(min-width: 480px)" srcSet={src.tablet} />
                        <Image className="b-radius resWidth prodImage" style={{height: "35rem", width: "35rem"}} src={src.mobile} width={500} height={550} alt="image of speaker" />
                    </picture>
                </div>
                <div className="productDetail childsMargin flex resWidth resCenter" style={{ flexDirection: 'column', justifyContent: 'center', width: '40%' }}>
                    <div style={{ color: 'var(--orange)' }} className="newProduct">NEW PRODUCT</div>
                    <div style={{ fontSize: '1.5rem', width: '15rem' }}>
                        <h2 style={{ textTransform: 'uppercase' }} >{name}</h2>
                    </div>
                    <p style={{ color: 'var(--greyOnWhite)' }}>
                        {desc}
                    </p>
                    <h3 style={{ display: `${cart ? "" : "none"}` }}><span>$ </span>{price}</h3>
                    <div className="flex">
                        <div className="flex" style={{ marginRight: '1rem', display: `${cart ? "" : "none"}` }}>
                            <div onClick={decrement} className="counter center">-</div>
                            <span className="counter center">{counter}</span>
                            <div onClick={increment} className="counter center">+</div>
                        </div>
                        <Btn link={link} bg={"orange"} size={'large'} text={cart ? "ADD PRODUCT" : "SEE PRODUCT"} />
                    </div>
                </div>
            </div>
        </>
    );
}