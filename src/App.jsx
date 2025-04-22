import { useState } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import BudgetSummary from "./components/BudgetSummary"
import IncomeInput from "./components/IncomeInput"
import List from './components/List'

function App() {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState([]);

    const totalExpenses = expenses.reduce((total, expense) => {
        return total + (expense.amount ? Number(expense.amount) : 0);
    }, 0);

    function handleDelete(index) {
        const newData = expenses.filter((_, i) => i !== index);
        setExpenses(newData);
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
