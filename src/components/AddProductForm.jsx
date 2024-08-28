import { useState } from "react";

export default function AddProductForm({ isOpen, onClose, onAddProduct}) {
    const [newProduct, setNewProduct] = useState({
        createdBy: "",
        productNumber: "",
        name: "",
        category: "",
        expirationDate: ""
    })

    const handleChange = (ev) => {
        setNewProduct({...newProduct, [ev.target.name] : ev.target.value})
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        onAddProduct(newProduct);
        onClose();
    }

    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
                <header className="flex justify-start text-2xl text-gray-800 w-full mb-2">Add Product</header>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Product Name" className="p-2 mb-2 rounded-lg border border-gray-300 cursor-pointer" required/>
                    <input type="text" name="productNumber" value={newProduct.productNumber} onChange={handleChange} placeholder="Product Number" className="p-2 mb-2 rounded-lg border border-gray-300 cursor-pointer" required/>
                    <input type="text" name="category" value={newProduct.category} onChange={handleChange} placeholder="Category" className="p-2 mb-2 rounded-lg border border-gray-300 cursor-pointer" required/>
                    <input type="date" name="expirationDate" value={newProduct.expirationDate} onChange={handleChange} className="p-2 mb-2 rounded-lg border border-gray-300 cursor-pointer" required/>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">Add Product</button>
                    <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded-lg mt-2 hover:bg-red-700">Cancel</button>
                </form>
            </div>
        </div>
    );
}