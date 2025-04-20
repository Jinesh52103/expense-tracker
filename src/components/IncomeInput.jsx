import {useState} from 'react'

export default function IncomeInput({setIncome, income}){
    const [inputValue, setInputValue] = useState('');
    

    return(
        <div className="mb-4">
            <label htmlFor="income" className="block text-sm font-bold text-gray-700 mb-1">
                Monthly Income
            </label>
            <input
                type="number"
                id="income"
                className="w-full p-2 border border-purple-400 rounded-md"
                placeholder="e.g. 3000"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button 
                className="text-white bg-purple-700 hover:bg-purple-800 w-full p-2 border border-purple-400 rounded-md mt-4"
                onClick={() => {
                    const addedIncome = Number(inputValue)
                    setIncome(income + addedIncome)
                    setInputValue('')
                }}>
                    Add Income
            </button> 
        </div>
    )
}