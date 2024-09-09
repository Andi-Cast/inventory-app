import { useEffect } from "react";
import { useState } from "react"
import { addProductAPI, applyCategoryFilterAPI, deleteProductAPI, getProductsAPI, updateProductAPI } from "../api/ApiServices";
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

    const handleFilteredProducts = async (categoryFilter) => {
        const filtedProducts = await applyCategoryFilterAPI(categoryFilter);
        setProducts(filtedProducts);
    }

    const handleSortExpSoon = () => {
        const sortedProducts = [...products].sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate));
        setProducts(sortedProducts);
    }

    const handleSortExpLate = () => {
        const sortedProducts = [...products].sort((a, b) => new Date(b.expirationDate) - new Date(a.expirationDate));
        setProducts(sortedProducts);
    }

    const handleSortUpdatedRecent = () => {
        const sortedProducts = [...products].sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
        setProducts(sortedProducts);
    }

    const handleSortUpdatedLatest = () => {
        const sortedProducts = [...products].sort((a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated));
        console.log(sortedProducts);
        setProducts(sortedProducts);
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
            <ProductList 
                products={products} 
                fetchProducts={fetchProducts}
                onAddProduct={handleAddProduct} 
                onDeleteProduct={handleDeleteProduct} 
                onUpdateProduct={handleUpdateProduct}
                onFilterProduct={handleFilteredProducts}
                onSortExpSoon={handleSortExpSoon}
                onSortExpLate={handleSortExpLate}
                onSortUpdatedRecent={handleSortUpdatedRecent}
                onSortUpdatedLatest={handleSortUpdatedLatest}
            />
        </div>
    )
}