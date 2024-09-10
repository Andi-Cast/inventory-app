import Product from "./Product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import AddProductForm from "./AddProductForm";
import { faSort } from "@fortawesome/free-solid-svg-icons";

export default function ProductList({ 
    products, 
    fetchProducts, 
    onAddProduct, 
    onDeleteProduct, 
    onUpdateProduct, 
    onFilterProduct, 
    onSortExpSoon, 
    onSortExpLate,
    onSortUpdatedRecent,
    onSortUpdatedLatest, }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isAddProductFormOpen, setIsAddProductFormOpen] = useState(false);
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [showSortMenu, setShowSortMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSearchTerm = (ev) => {
        setSearchTerm(ev.target.value);
    }

    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    })

    const handleAddNewProductForm = () => {
        setIsAddProductFormOpen(true);
    }

    const handleCloseAddNewProductForm = () => {
        setIsAddProductFormOpen(false);
    }

    const toggleFilterMenu = () => {
        setShowFilterMenu(!showFilterMenu);
    }

    const handleCategoryChange = (ev) => {
        setSelectedCategory(ev.target.value);
    } 

    const handleApplyFilter = () => {
        if(selectedCategory) {
            try {
                onFilterProduct(selectedCategory);
            } catch (error) {
                console.log("Unable to apply filter: ", error);
            }
        }
    }

    const toggleSortMenu = () => {
        setShowSortMenu(!showSortMenu);
    }

    const handleRemoveFilter = () => {
        fetchProducts();
        setSelectedCategory("");
    }

    return (
        <section className="flex flex-col w-full h-full justify-start p-6 bg-white">
            <header className="flex justify-start text-3xl text-gray-800 w-full">Inventory List</header>
            <div className="flex justify-between items-center mt-4 gap-3">
                <div className="flex gap-3">
                    <input
                        type="text"
                        value={searchTerm}
                        placeholder="Search for inventory..."
                        onChange={handleSearchTerm}
                        className="rounded-lg px-4 border border-gray-500 cursor-pointer"
                    />
                    <div onClick={toggleFilterMenu} className="relative flex justify-center items-center border border-gray-500 px-4 py-2 rounded-lg hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faFilter} />
                        <span className="ml-2">Filter</span>
                        {showFilterMenu && (
                            <nav onMouseLeave={() => setShowFilterMenu(false)} className="absolute left-0 top-full min-w-full bg-white shadow-lg border rounded-lg z-10">
                                <div className="flex flex-col items-start p-3">
                                    <div className="text-nowrap text-md font-bold mb-1">Select Category</div>
                                    {['Produce', 'D19', 'Cooler', 'Freezer'].map(category => (
                                        <label key={category} className="inline-flex items-center w-full">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category}
                                                onChange={handleCategoryChange}
                                                onClick={(ev) => ev.stopPropagation()}
                                                checked={selectedCategory === category}
                                            />
                                            <span className="ml-2 text-left font-xl">{category}</span>
                                        </label>
                                    ))}
                                    <button onClick={handleApplyFilter} className="flex justify-center items-center text-nowrap px-4 text-sm mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 w-full">Apply Filter</button>
                                    <button onClick={handleRemoveFilter} className="flex justify-center items-center text-nowrap px-4 text-sm mt-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 w-full">Remove Filter</button>
                                </div>
                            </nav>
                        )}
                    </div>
                    <div onClick={toggleSortMenu} className="relative flex justify-center items-center border border-gray-500 px-4 py-2 rounded-lg hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faSort} />
                        <span className="ml-2">Sort</span>
                        {showSortMenu && (
                            <nav onMouseLeave={() => setShowSortMenu(false)} className="absolute left-0 top-full min-w-full bg-white shadow-lg rounded-lg border z-10">
                                <div className="flex flex-col items-start p-2"> 
                                    <div className="text-nowrap text-md font-bold mb-1">Sort By </div>
                                    <div onClick={onSortExpSoon} className="flex justify-start text-nowrap border-t border-gray-300 py-2 px-1 hover:bg-gray-200 w-full">Expiration Date (Soonest First)</div>
                                    <div onClick={onSortExpLate} className="flex justify-start text-nowrap border-t border-gray-300 py-2 px-1 hover:bg-gray-200 w-full">Expiration Date (Furthest First)</div>
                                    <div onClick={onSortUpdatedRecent} className="flex justify-start text-nowrap border-t border-gray-300 py-2 px-1 hover:bg-gray-200 w-full">Last Edited (Most Recent)</div>
                                    <div onClick={onSortUpdatedLatest} className="flex justify-start text-nowrap border-t border-gray-300 py-2 px-1 hover:bg-gray-200 w-full">Last Edited (Least Recent)</div>
                                </div>
                            </nav>
                        )}
                    </div>
                </div>
                <button onClick={handleAddNewProductForm} className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="ml-2">Add Product</span>
                </button>
            </div>
            {filteredProducts.length > 0 ? (
                <>
                    <div className="grid grid-cols-6 bg-slate-200 mt-3">
                        <div className="flex justify-center border-b border-l border-t border-gray-500 px-3 py-2">Name</div>
                        <div className="flex justify-center border-b border-l border-t border-gray-500 px-3 py-2">Item Number</div>
                        <div className="flex justify-center border-b border-l border-t border-gray-500 px-3 py-2">Category</div> 
                        <div className="flex justify-center border-b border-l border-t border-gray-500 px-3 py-2">Exp. Date</div>
                        <div className="flex justify-center border-b border-l border-t border-gray-500 px-3 py-2">Last Edited</div>
                        <div className="flex justify-center border border-gray-500 px-3 py-2">Actions</div>
                    </div>
                    {filteredProducts.map(product => (
                        <Product key={product.id} product={product} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct}/>
                    ))}
                </>
            ) : (
                <div className="flex justify-center text-3xl text-gray-800 mt-3">No products found.</div>
            )}
            <AddProductForm isOpen={isAddProductFormOpen} onClose={handleCloseAddNewProductForm} onAddProduct={onAddProduct}/>
        </section>
    );
}
