import {useState} from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import BudgetSummary from "./components/BudgetSummary"
import IncomeInput from "./components/IncomeInput"
import List from './components/List'

function App() {

  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([])
 

  function handleDelete(index) {
  const newData = expenses.filter((_, i) => i !== index);
  setExpenses(newData);
}

const totalSpent = expenses.reduce((acc, next) => acc + Number(next.amount), 0)


  return (
    <div className='bg-gray-900'>
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <Header />
      <IncomeInput
      setIncome={setIncome}
      income={income}
      />
      <Form 
      setData={setExpenses}
      />
      <BudgetSummary 
      income={income - totalSpent}
      spent={totalSpent}
      />
    {console.log("App is passing expenses to List:", expenses)}
      <List 
      data={expenses}
      handleDelete={handleDelete}
      />
    </div>
    </div>
  )
}

export default App
