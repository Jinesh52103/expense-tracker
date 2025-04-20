import {useState} from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import BudgetSummary from "./components/BudgetSummary"
import IncomeInput from "./components/IncomeInput"
import List from './components/List'

function App() {

  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([])

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
      income={income}
      />
    {console.log("App is passing expenses to List:", expenses)}
      <List 
      data={expenses}
      />
    </div>
  )
}

export default App
