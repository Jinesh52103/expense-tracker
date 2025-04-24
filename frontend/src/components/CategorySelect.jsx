import { useState } from "react"

export default function CategorySelect({ value, onChange }) {
    const [categories] = useState([
        "Food",
        "Transport",
        "Utilities",
        "Rent",
        "Subscriptions",
        "Savings and Investment",
        "Loan Payments",
        "Personal Expenses",
        "Other"
    ])

    return (
        <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-1">Category</label>
            <select
                id="category"
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-purple-400 rounded-md"
            >
                <option>Select Category</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
}
