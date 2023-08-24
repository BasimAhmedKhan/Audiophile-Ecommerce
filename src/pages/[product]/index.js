import BestGear from "@/components/bestGear/BestGear";
import Product from "@/components/product/Product";
import ProductCardContainer from "@/components/productCardContainer/ProductCardContainer";
import { useRouter } from "next/router";

export default function (props) {
    const { prod } = props;
    const router = useRouter();
    const { product } = router.query;
    const productList = prod.map((p, i) => {
        return <Product
            key={p.id}
            cart={false}
            name={p.name}
            price={p.price}
            desc={p.description}
            incl={p.include}
            reverse={i % 2 !== 0}
            src={p.image}
        />
    })
    return (
        <>
            <section className="white" style={{ backgroundColor: 'var(--black)' }}>
                <div className="center">
                    <h2 className="marginTB"
                        style=
                        {{
                            textTransform: 'uppercase',
                            fontSize: '2.5rem'
                        }}>
                        {product}
                    </h2>
                </div>
            </section>
            <section>
                {productList}
            </section>
            <section>
                <ProductCardContainer />
            </section>
            <section>
                <BestGear />
            </section>
        </>
    );
}

export async function getStaticProps({ params }) {
    const { product } = params;
    const res = await fetch(`http://localhost:3000/api/products/${product}`);
    const data = await res.json();
    return {
        props: {
            prod: data
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    product: 'headphones',
                },
            },
            {
                params: {
                    product: 'earphones',
                },
            },
            {
                params: {
                    product: 'speakers',
                },
            },
        ],
        fallback: false, // false or "blocking"
    };
}