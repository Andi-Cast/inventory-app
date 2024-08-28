import Product from "./Product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import AddProductForm from "./AddProductForm";

export default function ProductList({ products }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleSearchTerm(ev) {
        setSearchTerm(ev.target.value);
    }

    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    })

    const handleAddNewProductClick = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleAddProduct = (newProduct) => {
        console.log(newProduct)
    }

    return (
        <section className="flex flex-col w-full justify-center p-4 bg-white">
            <header className="flex justify-start text-3xl text-gray-800 w-full">Inventory List</header>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 mt-3">
                    <input
                        type="text"
                        value={searchTerm}
                        placeholder="Search for inventory..."
                        onChange={handleSearchTerm}
                        className="rounded-lg px-4 py-2 border border-gray-500 cursor-pointer"
                    />
                    <div className="flex items-center justify-center border shadow-sm px-4 py-2 rounded-lg hover:shadow-x cursor-pointer">
                        <FontAwesomeIcon icon={faFilter} />
                        <span className="ml-2">Filter</span>
                    </div>
                </div>
                <button onClick={handleAddNewProductClick} className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="ml-2">Add Product</span>
                </button>
            </div>
            {filteredProducts.length > 0 ? (
                <>
                    <div className="grid grid-cols-4 bg-slate-300 mt-3">
                        <div className="flex justify-center border border-gray-500 px-3 py-2">Name</div>
                        <div className="flex justify-center border border-gray-500 px-3 py-2">Product Number</div>
                        <div className="flex justify-center border border-gray-500 px-3 py-2">Category</div> 
                        <div className="flex justify-center border border-gray-500 px-3 py-2">Exp. Date</div>
                    </div>
                    {products.map(product => (
                        <Product key={product.id} product={product}/>
                    ))}
                </>
            ) : (
                <div className="flex justify-center text-3xl text-gray-800 mt-3">No products found.</div>
            )}
            <AddProductForm isOpen={isModalOpen} onClose={handleCloseModal} onAddProduct={handleAddProduct}/>
        </section>
    );
}
