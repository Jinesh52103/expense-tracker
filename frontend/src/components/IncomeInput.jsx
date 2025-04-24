import {useState} from 'react'

export default function IncomeInput({setIncome, income}){
    const [inputValue, setInputValue] = useState('');

    function handleClick(){
        fetch("http://localhost:5000/income", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ amount: Number(inputValue) }),
})
  .then(res => res.json())
  .then(() => {

    fetch("http://localhost:5000/income")
      .then(res => res.json())
      .then(data => {
        const total = data.reduce((acc, item) => acc + item.amount, 0);
        setIncome(total);
      });
    setInputValue('');
  })
  .catch(err => {
    console.error(err);
    alert("Error saving income");
  });

    }
    

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
                onClick={handleClick}>
                    Add Income
            </button> 
        </div>
    )
}