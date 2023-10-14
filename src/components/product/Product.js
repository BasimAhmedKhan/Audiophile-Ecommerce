import Image from "next/image";
import Btn from "@/components/button/Btn";
import { useCart } from "@/context/CartContext";

export default function Product({ id, name, price, desc, cart, reverse, src, link, click, slug }) {

    const { addProduct, getItemQuantity, increaseQuantity, decreaseQuantity } = useCart();
    const counter = getItemQuantity(id);
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
                    {getItemQuantity(id) > 0 ?
                        <div className="flex" style={{ marginRight: '1rem' }}>
                            <div onClick={() => decreaseQuantity(id)} className="counter center">-</div>
                            <span className="counter center">{counter}</span>
                            <div onClick={() => increaseQuantity(id)} className="counter center">+</div>
                        </div> : null}
                    <div onClick={click ? () => { addProduct(id, name, slug, price, counter) } : null}>
                        <Btn click={click} link={link} bg={"orange"} size={'large'} text={cart ? "ADD PRODUCT" : "SEE PRODUCT"} />
                    </div>
                </div>
            </div>
        </div>
    );
}