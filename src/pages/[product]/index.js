import BestGear from "@/components/bestGear/BestGear";
import Product from "@/components/product/Product";
import ProductCardContainer from "@/components/productCardContainer/ProductCardContainer";
import { useRouter } from "next/router";

export default function () {

    const router = useRouter();
    const { product } = router.query;

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
                <Product cart={false} />
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