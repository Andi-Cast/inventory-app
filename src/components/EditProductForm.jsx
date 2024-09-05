import { format, formatISO, parseISO, startOfDay } from "date-fns";
import { useEffect } from "react";
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from "@fortawesome/free-solid-svg-icons";

const formatInputDate = (dateString) => {
    try {
        const date = parseISO(dateString);
        return format(date, "yyyy-MM-dd");
    } catch (error) {
        console.log("Error formatting date for input: ", error);
        return "";
    }
}

export default function EditProductForm ({ product, isOpen, onClose , onUpdateProduct}) {

    const [editedProduct, setEditedProduct] = useState({
        id: product.id,
        name: product.name,
        productNumber : product.productNumber,
        category: product.category,
        expirationDate : product.expirationDate
    });

    useEffect(() => {
        setEditedProduct(product);
    }, [product]);

    const handleChange = (ev) => {
        setEditedProduct({...editedProduct, [ev.target.name] : ev.target.value});
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const dateInput = parseISO(editedProduct.expirationDate); //parse input as ISO format
        const dateMidnightUTC = startOfDay(dateInput);  // ensure the time is set to midnight

        const formattedProduct = {
            ...editedProduct,
            expirationDate : formatISO(dateMidnightUTC) //format back to ISO string
        }
        onUpdateProduct(formattedProduct);
        onClose();
    }

    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
                <header className="flex justify-between items-center mb-1 text-2xl text-gray-800">
                    Update Product
                    <FontAwesomeIcon className="hover:text-red-600 font-bold cursor-pointer" onClick={onClose} icon={faX}/>
                </header>
                <form  onSubmit={(ev) => handleSubmit(ev)} className="flex flex-col">
                    <label className="font-medium text-gray-700 mb-1">Product Name</label>
                    <input type="text" name="name" value={editedProduct.name} onChange={handleChange} placeholder="Product Name" className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer" required/>
    
                    <label className="font-medium text-gray-700 mb-1">Product Number</label>
                    <input type="text" name="productNumber" value={editedProduct.productNumber} onChange={handleChange} placeholder="Product Number" className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer" required/>
    
                    <label className="font-medium text-gray-700 mb-1">Category</label>
                    <input type="text" name="category" value={editedProduct.category} onChange={handleChange} placeholder="Category" className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer" required/>
    
                    <label className="font-medium text-gray-700 mb-1">Expiration Date</label>
                    <input type="date" name="expirationDate" value={formatInputDate(editedProduct.expirationDate)} onChange={handleChange} className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer" required/>
    
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">Update Product</button>
                </form>
            </div>
        </div>
    )
}