import BestGear from "@/components/bestGear/BestGear";
import Product from "@/components/product/Product";
import ProductCardContainer from "@/components/productCardContainer/ProductCardContainer";
import { useRouter } from "next/router";
import { Skeleton } from 'antd';

export default function Index(props) {
    const { prod } = props;
    const router = useRouter();
    const { product } = router.query;
    // if (!prod) {
    //     return (
    //         <div className="flex marginTB" style={{ justifyContent: "space-between", height: '35rem', width: '35rem'}}>
    //             <Skeleton.Image active={true} className="height100 width100"/>
    //             <Skeleton className="height100 width100" />
    //         </div>
    //     );
    // }
    const productList = prod.map((p, i) => {
        return <Product
            key={p.id}
            cart={false}
            name={p.name}
            price={p.price}
            desc={p.description}
            reverse={i % 2 !== 0}
            src={p.image}
            link={`/${product}/${p.slug}`}
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
    const res = await fetch(`https://audiophile-murex.vercel.app/api/products/${product}`);
    // const res = await fetch(`http://localhost:3000/api/products/${product}`);
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
            // {
            //     params: {
            //         product: 'headphones',
            //     },
            // },
            // {
            //     params: {
            //         product: 'earphones',
            //     },
            // },
            // {
            //     params: {
            //         product: 'speakers',
            //     },
            // },
        ],
        fallback: "blocking", // false or "blocking"
    };
}