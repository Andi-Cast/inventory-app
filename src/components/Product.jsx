import { format, parseISO } from "date-fns"

function formatDate(dateString) {
    const date = parseISO(dateString);
    return format(date, "MM/dd/yy");
}

export default function Product({ product }) {
    return (
        <div className="grid grid-cols-4 bg-white">
            <div className="flex justify-center border border-gray-500 px-3 py-2">{product.name}</div>
            <div className="flex justify-center border border-gray-500 px-3 py-2">{product.productNumber}</div>
            <div className="flex justify-center border border-gray-500 px-3 py-2">{product.category}</div>
            <div className="flex justify-center border border-gray-500 px-3 py-2">{formatDate(product.expirationDate)}</div>
        </div>
    );
}