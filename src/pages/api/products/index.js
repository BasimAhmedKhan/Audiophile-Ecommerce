import { getProducts } from "../../../../services/products";


export default function handler(req, res) {
    if (req.method === "GET") {
        const products = getProducts();
        return res.status(200).json(products)
    }
    return res.status(404).send();

}