import Product from "../product/Product";

export default function ProductWrapper({ prod }) {
    

    return <Product
        key={prod.id}
        cart={true}
        name={prod.name}
        price={prod.price}
        desc={prod.description}
        src={prod.image}
        click={true}
        setOrder={setOrder}
        orders={orders} />
}