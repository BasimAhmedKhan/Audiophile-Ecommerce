import Image from "next/image";
import { useRouter } from "next/router";

export default function () {

    const router = useRouter();
    const {product} = router.query; 

    return (
        <>
            <section className="white" style={{backgroundColor: 'var(--black)'}}>
                <div className="center">
                    <h2 className="marginTB" style={{textTransform: 'uppercase', fontSize: '2.5rem'}}>{product}</h2>
                </div>
            </section>
            <section>
                <div className="marginTB">
                    <div className="productCard">
                        <Image src="/images/category-headphones/desktop/image-xx99-mark-one.jpg" width={500} height={500} />
                    </div>
                </div>
            </section>
        </>
    );
}