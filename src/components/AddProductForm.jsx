import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function AddProductForm({ isOpen, onClose, onAddProduct }) {
    const { userDetails } = useContext(UserContext);
    const [newProduct, setNewProduct] = useState({
        createdBy: userDetails.id,
        productNumber: "",
        name: "",
        category: "",
        expirationDate: ""
    })

    const handleChange = (ev) => {
        setNewProduct({...newProduct, [ev.target.name] : ev.target.value})
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const formattedProduct = {
            ...newProduct,
            expirationDate : new Date(newProduct.expirationDate).toISOString()
        }
        try {
            onAddProduct(formattedProduct);
            setNewProduct({
                createdBy: userDetails.id,
                productNumber: "",
                name: "",
                category: "",
                expirationDate: ""
            })
            onClose();   
        } catch (error) {
            console.log("Error adding product: ", error);
        }
    }

    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
                <header className="flex justify-start text-2xl text-gray-800 w-full mb-4">Add Product</header>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label className="font-medium text-gray-700 mb-1">Product Name</label>
                    <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Product Name" className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer" required/>
    
                    <label className="font-medium text-gray-700 mb-1">Product Number</label>
                    <input type="text" name="productNumber" value={newProduct.productNumber} onChange={handleChange} placeholder="Product Number" className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer" required/>
    
                   
                    <label className="font-medium text-gray-700 mb-1">Category</label>
                    <div className="grid grid-cols-2 ml-1 mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value="Produce"
                                checked={newProduct.category === 'Produce'}
                                onChange={handleChange}
                                className="form-radio"
                                required
                            />
                            <span className="ml-2">Produce</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value="D19"
                                checked={newProduct.category === 'D19'}
                                onChange={handleChange}
                                className="form-radio"
                                required
                            />
                            <span className="ml-2">D19</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value="Cooler"
                                checked={newProduct.category === 'Cooler'}
                                onChange={handleChange}
                                className="form-radio"
                                required
                            />
                            <span className="ml-2">Cooler</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value="Freezer"
                                checked={newProduct.category === 'Freezer'}
                                onChange={handleChange}
                                className="form-radio"
                                required
                            />
                            <span className="ml-2">Freezer</span>
                        </label>
                    </div>
    
                    <label className="font-medium text-gray-700 mb-1">Expiration Date</label>
                    <input type="date" name="expirationDate" value={newProduct.expirationDate} onChange={handleChange} className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer" required/>
    
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">Add Product</button>
                    <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded-lg mt-4 hover:bg-red-700">Cancel</button>
                </form>
            </div>
        </div>
    );
    
}