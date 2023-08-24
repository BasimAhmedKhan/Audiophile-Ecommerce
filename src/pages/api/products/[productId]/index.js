import { getByCat } from "../../../../../services/products";

export default function handler(req, res) {
    if (req.method === "GET") {
        const { productId } = req.query;
        const products = getByCat(productId);
        return res.status(200).json(products)
    }
    return res.status(404).send();

}