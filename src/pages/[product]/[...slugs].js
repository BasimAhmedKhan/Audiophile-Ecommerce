import BestGear from "@/components/bestGear/BestGear";
import Product from "@/components/product/Product";
import ProductCardContainer from "@/components/productCardContainer/ProductCardContainer";

export default function Slug(props) {

    const { prod } = props;

    return (
        <>
            <div className="">
                <Product
                    key={prod.id}
                    cart={true}
                    name={prod.name}
                    price={prod.price}
                    desc={prod.description}
                    src={prod.image}
                    link={"#"}
                />
                <h2 className="center marginTB">YOU MAY ALSO LIKE</h2>
                <ProductCardContainer />
                <BestGear />
                
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    const { product, slugs } = params;
    const res = await fetch(`http://localhost:3000/api/products/${product}/${slugs[0]}`);
    const data = await res.json();
    return {
        props: {
            prod: data,
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: [
        ],
        fallback: "blocking", // false or "blocking"
    };
}