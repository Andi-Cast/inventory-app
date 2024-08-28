import { useEffect } from "react";
import { useState } from "react"
import { getProducts } from "../api/ApiServices";
import ProductList from "./ProductList";

export default function DashBoard() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts().then(setProducts).catch(setError);
        console.log(products);
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex flex-col w-2/3">
            <ProductList products={products}/>
        </div>
    )
}