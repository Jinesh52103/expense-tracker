import {useState} from 'react'
import IncomeInput from "./IncomeInput"
import ExpenseForm from "./ExpenseForm"
import CategorySelect from "./CategorySelect"


export default function Form({setData}){

  const [formData, setFormData] = useState({
    expense : "",
    amount : "",
    date : "",
    category : ""
  });

  function handleChange(e){
    setFormData((prev) => {
      return {...prev,
      [e.target.id] : e.target.value

    }})
  }


    return(
        <div>
      <h2 className="text-xl font-semibold text-center mt-6 mb-4 text-gray-800">Add Expense</h2>
      <ExpenseForm 
        title = "Expense Description"
        type = "text"
        id = "expense"
        placeholder = "e.g. Phone Bill"
        value={formData.expense}
        onChange={handleChange}
      />
      <ExpenseForm 
        title = "Amount ($)"
        type = "number"
        id = "amount"
        placeholder = "e.g. 300"
        value={formData.amount}
        onChange={handleChange}
      />
      <ExpenseForm 
        title = "Date"
        type = "date"
        id = "date"
        value={formData.date}
        onChange={handleChange}
      />

      <CategorySelect 
        value={formData.category}
        onChange={handleChange}
      />

      <button
      className="text-white hover:bg-purple-800 w-full p-2 border border-purple-400 rounded-md mt-4"
      onClick={() => {
      setData(prev => [...prev, formData]);
      setFormData({ expense: "", amount: "", date: "", category: "" });
      }}

      >Add Expense</button>

      
        </div>
    )
}