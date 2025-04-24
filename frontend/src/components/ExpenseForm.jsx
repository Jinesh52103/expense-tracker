


export default function ExpenseForm({title, type, id, placeholder, onChange, value}){
    return(
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-bold text-gray-700 mb-1">
                {title}
            </label>
            <input
                type={type}
                id={id}
                className="w-full p-2 border border-purple-400 rounded-md"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}