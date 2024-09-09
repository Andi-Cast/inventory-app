import { format, parseISO } from "date-fns"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EditProductForm from "./EditProductForm";

const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "MM/dd/yy");
}

export default function Product({ product, onDeleteProduct, onUpdateProduct }) {
    const [showActions, setShowActions] = useState(false);
    const [isEditProductFormOpen, setIsEditProductFormOpen] = useState(false);

    const toggleActions = () => {
        setShowActions(!showActions);
    }
    
    const handleDeleteProduct = async (productId) => {
        try {
            onDeleteProduct(productId);
        } catch (error) {
            console.log("Error deleting product: ", error);
        }
    }

    const handleOpenEditProductForm = () => {
        setIsEditProductFormOpen(true);
    }

    const handleCloseEditProductForm = () => {
        setIsEditProductFormOpen(false);
    }

    return (
        <div className="grid grid-cols-6 bg-white">
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{product.name}</div>
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{product.productNumber}</div>
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{product.category}</div>
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{formatDate(product.expirationDate)}</div>
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{formatDate(product.lastUpdated)}</div>
            <div className="group relative flex justify-center items-center border-b border-l border-r border-gray-500 px-3 py-2">
                <FontAwesomeIcon  onClick={toggleActions} className="text-slate-500 hover:text-slate-700 text-2xl cursor-pointer" icon={faEllipsis}/>
                {showActions && (
                    <nav  onMouseEnter={() => setShowActions(true)} onMouseLeave={() => setShowActions(false)} className="absolute left-0 top-full w-full bg-white shadow-lg border z-10">
                        <ul className="text-gray-700">
                            <li onClick={handleOpenEditProductForm} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Edit <FontAwesomeIcon icon={faEdit} /></li>
                            <li onClick={() => handleDeleteProduct(product.id)} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Delete <FontAwesomeIcon icon={faTrashAlt} /></li>
                        </ul>
                    </nav>
                )}
            </div>
            <EditProductForm isOpen={isEditProductFormOpen} onClose={handleCloseEditProductForm} product={product} onUpdateProduct={onUpdateProduct}/>
        </div>
    );
}