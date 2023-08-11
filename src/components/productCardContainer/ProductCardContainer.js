import ProductCard from '@/components/productCard/ProductCard';

export default function ProductCardContainer(){
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '6rem 0rem'}}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}