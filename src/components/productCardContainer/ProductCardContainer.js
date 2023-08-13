import ProductCard from '@/components/productCard/ProductCard';

export default function ProductCardContainer(){
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '8rem 0rem'}}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}