import Image from "next/image";
import Btn from "@/components/button/Btn";
import { useState } from "react";

export default function Product({ name, price, desc, cart, reverse, src, link, click, slug }) {
    const [counter, setVall] = useState(1);
    const increment = () => {
        setVall(e => e + 1);
    };
    const decrement = () => {
        setVall(e => e == 1 ? e : e - 1);
    };
    const addProduct = () => {
        const productDetails = {
            name: name,
            image: slug,
            price: price,
            counter: counter,
        };

        // Get the current orders from localStorage or initialize an empty array if it doesn't exist
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const existingProductIndex = orders.findIndex((item) => item.name === name);

        if (existingProductIndex !== -1) orders[existingProductIndex].counter = counter;
        else orders.push(productDetails);

        localStorage.setItem('orders', JSON.stringify(orders));
    };
    return (
        <div className="marginTB flex flex-column childsMargin" style={{ justifyContent: "space-between", flexDirection: `${reverse ? "row-reverse" : 'row'}` }}>
            <div className="productCard">
                <picture>
                    <source media="(min-width: 992px)" srcSet={src.desktop} />
                    <source media="(min-width: 480px)" srcSet={src.tablet} />
                    <Image className="b-radius resWidth prodImage" style={{ height: "35rem", width: "35rem" }} src={src.mobile} width={500} height={550} alt="image of speaker" />
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
                {cart ? <h3><span>$ </span>{price}</h3> : null}
                <div className="flex">
                    {cart ?
                        <div className="flex" style={{ marginRight: '1rem' }}>
                            <div onClick={decrement} className="counter center">-</div>
                            <span className="counter center">{counter}</span>
                            <div onClick={increment} className="counter center">+</div>
                        </div> : null}
                    <div onClick={addProduct}>
                        <Btn click={click} link={link} bg={"orange"} size={'large'} text={cart ? "ADD PRODUCT" : "SEE PRODUCT"} />
                    </div>
                </div>
            </div>
        </div>
    );
}