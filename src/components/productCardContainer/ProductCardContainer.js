import ProductCard from '@/components/productCard/ProductCard';

export default function ProductCardContainer(){
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '8rem 7rem'}}>
            <ProductCard name='headphones' />
            <ProductCard name='speakers' />
            <ProductCard name='earphones' />
        </div>
    );
}