import { useEffect } from "react";
import { useState } from "react"
import { addProductAPI, deleteProductAPI, getProductsAPI, updateProductAPI } from "../api/ApiServices";
import ProductList from "./ProductList";

export default function DashBoard() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const handleAddProduct = async (newProductData) => {
        const newProductResponse = await addProductAPI(newProductData);
        setProducts(prev => [...prev, newProductResponse]);
    }

    const handleDeleteProduct = async (productId) => {
        await deleteProductAPI(productId);
        setProducts(products =>
            products.filter(product => product.id !== productId)
        );
    }

    const handleUpdateProduct = async (updatedProduct) => {
        const updatedProductFromAPI =  await updateProductAPI(updatedProduct);
        setProducts((prevProducts) => prevProducts.map(product => 
            product.id === updatedProductFromAPI.id ? updatedProductFromAPI : product
        ));
    }

    const fetchProducts = async () => {
        try {
            const fetchedProducts = await getProductsAPI();
            setProducts(fetchedProducts);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex flex-col w-2/3">
            <ProductList products={products} onAddProduct={handleAddProduct} onDeleteProduct={handleDeleteProduct} onUpdateProduct={handleUpdateProduct}/>
        </div>
    )
}