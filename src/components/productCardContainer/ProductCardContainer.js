import ProductCard from '@/components/productCard/ProductCard';

export default function ProductCardContainer(){
    return(
        <div className="flex-column childsMargin resCenter marginTB" style={{display: 'flex', justifyContent: 'space-between'}}>
            <ProductCard name='headphones' />
            <ProductCard name='speakers' />
            <ProductCard name='earphones' />
        </div>
    );
}