import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import BudgetSummary from "./components/BudgetSummary"
import IncomeInput from "./components/IncomeInput"
import List from './components/List'

function App() {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
  fetch("http://localhost:5000/income")
    .then(res => res.json())
    .then(data => {
      const total = data.reduce((acc, entry) => acc + entry.amount, 0);
      setIncome(total);
    })
    .catch(err => console.error("Error fetching income:", err));
}, []);

    function fetchExpenses() {
  fetch("http://localhost:5000/expenses")
    .then(res => res.json())
    .then(data => setExpenses(data))
    .catch(err => console.error("Error fetching expenses:", err));
}

useEffect(() => {
  fetchExpenses();
}, []);



    const totalExpenses = expenses.reduce((total, expense) => {
        return total + (expense.amount ? Number(expense.amount) : 0);
    }, 0);

    function handleDelete(id) {
  fetch(`http://localhost:5000/expenses/${id}`, {
    method: "DELETE"
  })
  .then(res => {
    if (!res.ok) throw new Error("Delete failed");
    setExpenses(prev => prev.filter(exp => exp._id !== id));
  })
  .catch(err => {
    console.error(err);
    alert("Failed to delete");
  });
}


    return (
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            <Header />
            <IncomeInput
                setIncome={setIncome}
                income={income}
            />
            <Form
                setData={setExpenses}
                refreshExpenses={fetchExpenses}
/>

            <BudgetSummary
                income={income - totalExpenses}
                expenses={totalExpenses}
            />
            {console.log("App is passing expenses to List:", expenses)}
            <List
                data={expenses}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default App
