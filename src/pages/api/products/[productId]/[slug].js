import { getBySlug } from "../../../../../services/products";

export default function handler(req, res) {
    if (req.method === "GET") {
        const { slug } = req.query;
        const products = getBySlug(slug);
        return res.status(200).json(products)
    }
    return res.status(404).send();

}