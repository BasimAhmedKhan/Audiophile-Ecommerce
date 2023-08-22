import BestGear from "@/components/bestGear/BestGear";
import Product from "@/components/product/Product";
import ProductCardContainer from "@/components/productCardContainer/ProductCardContainer";


export default function(){
    return(
        <>
            <div className="">
                <h2 className="center">YOU MAY ALSO LIKE</h2>
                <ProductCardContainer />
                <BestGear />
            </div>
        </>
    );
}