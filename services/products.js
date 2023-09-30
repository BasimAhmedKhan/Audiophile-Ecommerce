import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "data", "products.json");

export function getProducts(){
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getByCat(cat){
    const data = getProducts();
    return data.filter(prod => prod.category === cat);
}

export function getBySlug(slug){
    const data = getProducts();
    return data.find(prod => prod.slug === slug);
}
