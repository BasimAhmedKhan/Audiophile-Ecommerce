import { useRouter } from "next/router";

export default function () {

    const router = useRouter();
    const {product} = router.query; 

    return (
        <>
            <section className="margin width100 white" style={{backgroundColor: 'var(--black)'}}>
                <div className="center">
                    <h1>{product}</h1>
                </div>
            </section>
        </>
    );
}